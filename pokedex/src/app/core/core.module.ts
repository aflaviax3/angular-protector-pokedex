import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexService } from './services/pokedex.service';
import { LoadingComponent } from './components/loading/loading.component';

const components = [
  LoadingComponent
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components,
  providers: [
    PokedexService
  ]
})
export class CoreModule { }
