import { Module } from '@nestjs/common';
import { AttractionController } from './attraction.controller';
import { AttractionService } from './attraction.service';

@Module({
  controllers: [AttractionController],
  providers: [AttractionService]
})
export class AttractionModule {}
