import { Test, TestingModule } from '@nestjs/testing';
import { TripContributorController } from './trip-contributor.controller';

describe('TripContributorController', () => {
  let controller: TripContributorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripContributorController],
    }).compile();

    controller = module.get<TripContributorController>(TripContributorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
