import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent} from '../app/calculadora/calculadora.component';
import { AppComponent } from './app.component';
import {  } from '@angular/core';

const routes: Routes = [

  {path: 'calculadora', component: CalculadoraComponent},
  {path: '*', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
