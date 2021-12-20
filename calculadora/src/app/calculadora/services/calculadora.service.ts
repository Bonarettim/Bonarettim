import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  static readonly PORCENTAGEM: string = '%';

  constructor() { }


  calcular(num1: number, num2: number, operaacao: string): number {
    let resultado: number;

    switch(operaacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO: 
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      case CalculadoraService.PORCENTAGEM: // vai realizar a porcentagem do valor
        resultado = num1 * num2 / 100;
      break;
      default: 
        resultado = 0;
    }
    return resultado;
  }

}
