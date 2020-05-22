
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from 'src/app/components/clientComponents/shopping-cart/shopping-cart.component';
import {LoginComponent} from 'src/app/components/clientComponents/login/login.component';
import {RegisterComponent} from 'src/app/components/clientComponents/register/register.component';
import {PageNotFoundComponent} from 'src/app/components/sharedComponents/page-not-found/page-not-found.component';
import { TrackComponent } from 'src/app/components/clientComponents/track/track.component';
import { CheckOutComponent } from 'src/app/components/clientComponents/check-out/check-out.component';
import { OrderPlacedComponent } from 'src/app/components/clientComponents/order-placed/order-placed.component';
import { ManagementComponent } from 'src/app/components/clientComponents/management/management.component';
import { ModifyComponent } from 'src/app/components/clientComponents/modify/modify.component';
import { DeleteComponent } from 'src/app/components/clientComponents/delete/delete.component';

import { SalesViewComponent } from 'src/app/components/reportsComponents/sales-view/sales-view.component';
import { TrackingViewComponent } from 'src/app/components/reportsComponents/tracking-view/tracking-view.component';
import { ShippedViewComponent } from 'src/app/components/reportsComponents/shipped-view/shipped-view.component';

import { RolesComponent } from './components/adminComponents/roles/roles.component';
import { SucursalesComponent } from './components/adminComponents/sucursales/sucursales.component';
import { TrabajadoresComponent } from './components/adminComponents/trabajadores/trabajadores.component';
import { VendedoresComponent } from './components/adminComponents/vendedores/vendedores.component';
import { ProductosComponent } from './components/adminComponents/productos/productos.component';
import { RutasComponent } from './components/adminComponents/rutas/rutas.component';

import {PaquetesComponent} from './components/bodegaComponents/paquetes/paquetes.component';
import {RastreoPaquetesComponent} from './components/bodegaComponents/rastreo-paquetes/rastreo-paquetes.component';
const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full'},
  { path: 'management', component: ManagementComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'shop', component: ShoppingCartComponent},
  { path: 'modify', component: ModifyComponent},
  { path: 'delete', component: DeleteComponent},
  { path: 'checkout', component: CheckOutComponent},
  { path: 'track', component: TrackComponent},
  { path: 'sales', component: SalesViewComponent},
  { path: 'tracking', component:TrackingViewComponent},
  { path: 'shipped', component:ShippedViewComponent},
  { path: 'order-placed', component: OrderPlacedComponent},
  { path: 'roles', component: RolesComponent},
  { path: 'sucursales', component: SucursalesComponent},
  { path: 'trabajadores', component: TrabajadoresComponent},
  { path: 'vendedores', component: VendedoresComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'rutas', component: RutasComponent},
  { path: 'paquetes', component: PaquetesComponent},
  { path: 'rastreo-paquetes', component: RastreoPaquetesComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
