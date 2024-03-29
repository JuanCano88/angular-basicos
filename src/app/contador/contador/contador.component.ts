import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styles: [],
})
export class ContadorComponent {
  titulo: string = 'DBZ App';
  numero: number = 10;
  base: number = 5;
  acumular(valor: number) {
    this.numero += valor;
  }
}
