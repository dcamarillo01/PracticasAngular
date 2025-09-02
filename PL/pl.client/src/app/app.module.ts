import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { ChuckModule } from './chuck/chuck.module';
import { RandompersonComponent } from './randomperson/componentes/randomperson/randomperson.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ThemoviedbComponent } from './themoviesDB/componentes/themoviedb/themoviedb.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalculadoraComponent,
    RandompersonComponent,
    ThemoviedbComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,FormsModule, ChuckModule, MatButtonModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
