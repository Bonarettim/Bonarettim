import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should ...', inject ([CalculadoraService], 
    (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));
});

it( 'deve garantir que 1 + 4 = 3',
  inject ([CalculadoraService], (service: CalculadoraService) =>{
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  })
);

it('Deve garanttir que 5 - 1 = 4 ',
  inject ([CalculadoraService], (service: CalculadoraService) =>{
    let subtracao = service.calcular(5, 1, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(4);
  })
);

it ('Deve garantir que 5 * 1 = 5',
  inject ([CalculadoraService],(service: CalculadoraService) => {
    let multiplicacao = service.calcular(5, 1, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(5);
  })
);

it ('Deve garantir que 6 / 2 = 3',
  inject ([CalculadoraService], (service: CalculadoraService) =>{
    let divisao = service.calcular(6, 2, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(3);
  })
);

it ('Deve garantir que 10 * 50 / 100 = 5',
  inject ([CalculadoraService], (service : CalculadoraService) => {
    let porcentagem = service.calcular(10, 50, CalculadoraService.PORCENTAGEM);
    expect(porcentagem).toEqual(5);
  })
);
