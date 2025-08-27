import { Component } from '@angular/core';
import { Calculadora } from '../../models/Calculadora';

@Component({
  selector: 'app-calculadora',
  standalone: false,
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

 
  // calculadora = new Calculadora(this.numero1, this.numero2);
  texto! : string;
  //two way binding
  numero1 : number = 0;
  numero2 : number = 0;
  resultado : number = 0;
  

  SumarTwoWayBinding(){

    const numero1 = this.numero1 ?? 0;
    const numero2 = this.numero2 ?? 0;
    this.resultado = numero1 + numero2;

  }

  Restar(){

    const numero1 = this.numero1 ?? 0;
    const numero2 = this.numero2 ?? 0;
    this.resultado = numero1 - numero2;


  }

  Multiplicar(){

    const numero1 = this.numero1 ?? 0;
    const numero2 = this.numero2 ?? 0;
    this.resultado = numero1 * numero2;
  }


  Dividir(){

    const numero1 = this.numero1 ?? 0;
    const numero2 = this.numero2 ?? 0;
    this.resultado = numero1 / numero2;
  }
  

  verValor(event : Event){

    var tag = event.target as HTMLInputElement;
    this.texto = tag.value;
    
  }

  

  
 

}
