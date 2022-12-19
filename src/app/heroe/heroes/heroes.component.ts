import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent {
  nombre: string = 'Ironman';
  edad: number = 38;
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 22;
  }
}
