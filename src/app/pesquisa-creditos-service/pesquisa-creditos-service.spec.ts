import { TestBed } from '@angular/core/testing';

import { PesquisaCreditosService } from './pesquisa-creditos-service';

describe('PesquisaCreditosService', () => {
  let service: PesquisaCreditosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquisaCreditosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
