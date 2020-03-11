import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RolesComponent } from './components/roles/roles.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RutasComponent } from './components/rutas/rutas.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'trabajadores', component: TrabajadoresComponent},
  {path: 'vendedores', component: VendedoresComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'rutas', component: RutasComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
