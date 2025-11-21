import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { loggerFor } from 'node_modules/openai/internal/utils/log';
import OpenAI from 'openai';
import { Attraction } from 'src/entities/trip/attraction.entity';
import { DeepPartial, Like, Repository } from 'typeorm';
import { AddAttratcionDto } from '../dtos/attraction/addAttraction.dto';
import { strict } from 'assert';


@Injectable()
export class AttractionService {

   private openAI: OpenAI


    constructor(@InjectRepository(Attraction) private attractionRepo: Repository<Attraction>, ) {
        this.openAI = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        })
    }

    async getAllAttractions() {
        return await this.attractionRepo.find()
    }

    async addAttractions(attractions: Attraction) {
        var req = await this.attractionRepo.create({...attractions})
        await this.attractionRepo.save(req)

        return req
    }

    async getAttractionsFor(destination: string) {

        try {
            var attractions: Attraction[];
            attractions = await this.attractionRepo.find({ where: [{ location: Like(`%${destination}%`) }, { city: Like(`%${destination}%`) }, { country: Like(`%${destination}%`) }] })
            if(attractions.length == 0) {
                return this.seedAttractions(destination)
            }else {
                return await attractions
            }
        }
        catch(err) {
            return err
        }
    }

    async seedAttractions(country?: string, city?: string) {
        try {
            const res = await this.openAI.chat.completions.create({
                model: 'gpt-4o-mini',
                response_format: {type: 'json_object'},
                messages: [
                        {
                        role: 'system',
                        content: `Na podstawie kraju i miasta (Jezeli coś sie nie zgadza albo jest nielogiczne zwróć: "attractions": "Nie istnieje", przetwarzaj tylko sprecyzowane informacje), znajdź 5 prawdziwych unikatowych atrakcji turystycznych.
                        Zwróć wynik **tylko** w formacie czystego JSON-a, bez komentarzy, markdowna ani dodatkowych znaków.
                        Każda atrakcja ma mieć pola: name, location, country, city, description (opcjonalne), url (do oficjalnej strony).
                        Wynik musi być poprawnym JSON-em, np.:
                        {
                        "attractions: [
                            { "name": "", "location": "", "country": "", "city": "", description: "", "url": "" },
                            ...
                        ]
                        } REKORDY MAJĄ BYĆ PO POLSKU`
                        },
                    {role: 'user', content: `${country} ${city}`}
                ]
            })
            const content = res.choices[0].message.content ?? ''
            if(!content) {
                throw new Error("Pusty Zwrot")
            }
            Logger.log(String(content))
            if(String(content).includes('"Nie istnieje"')) {
                Logger.log("if dziala")
                throw new BadRequestException("Kraj lub miasto nie istnieje")
            }

            const attractions: AddAttratcionDto[] = (() => {
                const data = JSON.parse(content);
                return Array.isArray(data) ? data : data.attractions;
            })();
        if(attractions) {
        await this.attractionRepo.upsert(attractions, ['name', 'location'])
        return attractions
        }
        }catch(err) {
            return err
        }
    }  
}
