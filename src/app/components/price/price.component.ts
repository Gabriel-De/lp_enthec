import { Component } from '@angular/core';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {

  cantidadone = 0;
  cantidadtwo = 0;
  precioKg = 12;
  resultado = 0;
  

  multiplicacion(){
    this.resultado = this.cantidadtwo * this.precioKg;
  }

  

}
