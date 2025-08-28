import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent} from '../app/calculadora/calculadora.component';
import { AppComponent } from './app.component';
import { VerfraseComponent} from './chuck/componentes/verfrase/verfrase.component';

const routes: Routes = [

  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'verfrase', component: VerfraseComponent},
  {path: '*', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
