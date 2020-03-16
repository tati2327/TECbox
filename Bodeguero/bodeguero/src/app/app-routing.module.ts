import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { RastreoComponent } from './components/rastreo/rastreo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'paquetes', component: PaquetesComponent},
  {path: 'rastreo', component: RastreoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
