import { TestBed, inject } from '@angular/core/testing';

import { VarService } from './var.service';

describe('VarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VarService]
    });
  });

  it('should be created', inject([VarService], (service: VarService) => {
    expect(service).toBeTruthy();
  }));
});
