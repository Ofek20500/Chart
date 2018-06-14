import { TestBed, inject } from '@angular/core/testing';

import { OurDataService } from './our-data.service';

describe('OurDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurDataService]
    });
  });

  it('should be created', inject([OurDataService], (service: OurDataService) => {
    expect(service).toBeTruthy();
  }));
});
