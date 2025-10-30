import { Test, TestingModule } from '@nestjs/testing';
import { TripContributorService } from './trip-contributor.service';

describe('TripContributorService', () => {
  let service: TripContributorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripContributorService],
    }).compile();

    service = module.get<TripContributorService>(TripContributorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
