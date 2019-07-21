import { TestBed } from '@angular/core/testing';

import { CompromisoService } from './compromiso.service';

describe('CompromisoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompromisoService = TestBed.get(CompromisoService);
    expect(service).toBeTruthy();
  });
});
