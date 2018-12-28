import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroTaxReturnComponent } from './hero-tax-return/hero-tax-return.component';
import { ClientesComponent } from './clientes/clientes.component';
import { MensajeComponent } from './mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroTaxReturnComponent,
    ClientesComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
