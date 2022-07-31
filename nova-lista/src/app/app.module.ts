import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NomeDaListaComponent } from './nome-da-lista/nome-da-lista.component';
import { PrimeiraListaComponent } from './primeira-lista/primeira-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NomeDaListaComponent,
    PrimeiraListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
