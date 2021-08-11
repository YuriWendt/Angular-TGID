import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsellComponent } from './productsell/productsell.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsellComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
