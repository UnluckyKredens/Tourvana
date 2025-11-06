import { Module } from '@nestjs/common';
import { AttractionController } from './attraction.controller';
import { AttractionService } from './attraction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attraction } from 'src/entities/trip/attraction.entity';
import OpenAI from 'openai';

@Module({
  imports: [TypeOrmModule.forFeature([Attraction]), OpenAI],
  controllers: [AttractionController],
  providers: [AttractionService]
})
export class AttractionModule {}
