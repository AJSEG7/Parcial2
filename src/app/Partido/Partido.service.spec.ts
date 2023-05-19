/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PartidoService } from './Partido.service';

describe('Service: Partido', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartidoService]
    });
  });

  it('should ...', inject([PartidoService], (service: PartidoService) => {
    expect(service).toBeTruthy();
  }));
});
