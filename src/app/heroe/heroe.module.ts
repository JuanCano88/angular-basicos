import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroesComponent, ListadoComponent],
  exports: [HeroesComponent, ListadoComponent],
  imports: [CommonModule],
})
export class HeroeModule {}
