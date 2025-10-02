import { Routes } from '@angular/router';
import { AppComponent } from './app';
import { HomeComponent } from './home-component/home-component';
import { PesquisaCreditosComponent } from './pesquisa-creditos-component/pesquisa-creditos-component';


export const routes: Routes = [
//  { path: '', component: AppComponent },
  { path: '', component: HomeComponent },
  { path: 'pesquisa-creditos', component: PesquisaCreditosComponent },
];