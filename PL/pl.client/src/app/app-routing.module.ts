import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent} from '../app/calculadora/calculadora.component';
import { AppComponent } from './app.component';
import { VerfraseComponent} from './chuck/componentes/verfrase/verfrase.component';
import {RandompersonComponent} from './randomperson/componentes/randomperson/randomperson.component';
import {ThemoviedbComponent} from './themoviesDB/componentes/themoviedb/themoviedb.component';
 
const routes: Routes = [

  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'verfrase', component: VerfraseComponent},
  {path: 'randomperson', component: RandompersonComponent},
  {path: 'movies', component: ThemoviedbComponent},
  {path: '*', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
