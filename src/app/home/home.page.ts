import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  numeroAtual = '0';
  ultimoNumero = '0';

  ultimoOperador = 'x';
  novoCalculo = true;
  grupoNumeros = [
    [7, 8, 9, '+'],
    [4, 5, 6, '-'],
    [1, 2, 3, '*'],
    ['c', 0, '=', '/']
  ];

  calculo(operadores: any) {
    console.log(operadores);

    if (isNumber(operadores)) {
      console.log('número');
      if (this.novoCalculo) {
        this.numeroAtual = '' + operadores;
      } else {
        this.numeroAtual += '' + operadores;
      }
      this.novoCalculo = false;
    } else if (operadores === 'c') {
        this.numeroAtual = '0';
        this.novoCalculo = true;
    } else if (operadores === '=') {
        if (this.ultimoOperador === '*') {
          this.numeroAtual = '' + (parseInt (this.ultimoNumero) * parseInt(this.numeroAtual));
        } else if (this.ultimoOperador === '-') {
          this.numeroAtual = '' + (parseInt(this.ultimoNumero) - parseInt(this.numeroAtual));
        } else if (this.ultimoOperador === '+') {
          this.numeroAtual = '' + (parseInt(this.ultimoNumero) + parseInt(this.numeroAtual));
        } else if (this.ultimoOperador === '/') {
          this.numeroAtual = '' + (parseInt(this.ultimoNumero) / parseInt(this.numeroAtual));
        }
    } else { // operador
      this.novoCalculo = true;
      this.ultimoNumero = this.numeroAtual;
      this.ultimoOperador = operadores;
    }
  }
}
