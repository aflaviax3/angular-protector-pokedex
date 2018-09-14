import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';


@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
