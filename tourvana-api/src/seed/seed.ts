import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { SeedModule } from "./seed.module";
import { HotelSeeder } from "./seeders/hotel.seeder";
import { Logger } from "@nestjs/common";
import { AttractionSeeder } from "./seeders/attraction.seeder";

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);

    const seedModule = app.select(SeedModule);
    const hotelSeeder = seedModule.get(HotelSeeder);
    const attractionSeeder = seedModule.get(AttractionSeeder)

    try {
        await hotelSeeder.seedHotels();
        await attractionSeeder.seedAttractions();
    }catch(err) {
        Logger.log(err)
    } finally {
        await app.close()
    }
}

bootstrap();