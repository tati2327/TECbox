import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { BodegViewComponent } from './components/bodeg-view/bodeg-view.component';
import { RolesComponent } from './components/admin-view/roles/roles.component';
import { SucursalesComponent } from './components/admin-view/sucursales/sucursales.component';
import { TrabajadoresComponent } from './components/admin-view/trabajadores/trabajadores.component';
import { VendedoresComponent } from './components/admin-view/vendedores/vendedores.component';
import { ProductosComponent } from './components/admin-view/productos/productos.component';
import { RutasComponent } from './components/admin-view/rutas/rutas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'shoppingCart', component: ShoppingCartComponent},
  { path: 'adminView', component: AdminViewComponent},
  { path: 'roles', component: RolesComponent},
  { path: 'sucursales', component: SucursalesComponent},
  { path: 'trabajadores', component: TrabajadoresComponent},
  { path: 'vendedores', component: VendedoresComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'rutas', component: RutasComponent},
  { path: 'bodegView', component: BodegViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
