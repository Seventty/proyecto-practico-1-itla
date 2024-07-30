/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { TareaService } from './TareaService.service';

describe('Service: TareaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareaService]
    });
  });

  it('should ...', inject([TareaService], (service: TareaService) => {
    expect(service).toBeTruthy();
  }));
});
