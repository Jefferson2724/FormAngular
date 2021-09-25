import { TestBed } from '@angular/core/testing';

import { FormDrivenService } from './form-driven.service';

describe('FormDrivenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormDrivenService = TestBed.get(FormDrivenService);
    expect(service).toBeTruthy();
  });
});
