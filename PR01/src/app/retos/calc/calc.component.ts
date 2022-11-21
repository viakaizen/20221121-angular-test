import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  constructor() { }

  titulo = 'Calculadora'
  primernum:number = 0;
  segundonum:number = 0;
  resultado:number = 0;

  Sumar() {
    this.resultado = this.primernum + this.segundonum;
  }
  Restar() {
    this.resultado = this.primernum - this.segundonum;
  }
  Multiplicar() {
    this.resultado = this.primernum * this.segundonum;
  }
  Dividir() {
    this.resultado = this.primernum / this.segundonum;
  }
}
