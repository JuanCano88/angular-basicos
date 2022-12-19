import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [],
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Batman',
    'Daredevil',
    'The Preacher',
  ];
  heroeBorrado: string | undefined = '';
  borrarHeroes() {
    //this.heroes.shift();
    //const heroeBorrado: any = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift();
  }
}
