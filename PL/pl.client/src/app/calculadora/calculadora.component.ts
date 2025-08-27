import { Component } from '@angular/core';
import { Calculadora } from '../../models/Calculadora';

@Component({
  selector: 'app-calculadora',
  standalone: false,
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  numero1! : number;
  numero2! : number;
  calculadora = new Calculadora(this.numero1, this.numero2);
  texto! : string;
  resultado! : number;
  userName: string = '';

  //two way binding
  numeroTwoWayBinding1 : number = 0;
  numeroTwoWayBinding2 : number = 0;
  resultadoTwoWayBinding : number = 0;
  

  SumarTwoWayBinding(){

    const numero1 = this.numeroTwoWayBinding1 ?? 0;
    const numero2 = this.numeroTwoWayBinding2 ?? 0;
    this.resultadoTwoWayBinding = numero1 + numero2;

  }


  Sumar(numero1: number, numero2: number){

    var resultado = numero1 + numero2;
    this.resultado = resultado;

  }

    Restar(numero1: number, numero2: number){

    var resultado = numero1 - numero2;
    this.resultado = resultado;

  }

    Multiplicar(numero1: number, numero2: number){

    var resultado = numero1 * numero2;
    this.resultado = resultado;

  }

    Dividir(numero1: number, numero2: number){

    var resultado = numero1 / numero2;
    this.resultado = resultado;

  }

  verValor(event : Event){

    var tag = event.target as HTMLInputElement;
    this.texto = tag.value;
    
  }

  Numero1(event : Event){

    var tag = event.target as HTMLInputElement;
    this.numero1 = parseInt(tag.value);
    
  }
  Numero2(event : Event){

    var tag = event.target as HTMLInputElement;
    this.numero2 = parseInt(tag.value);
    
  }

  
 

}
