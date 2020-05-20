import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { SalesViewComponent } from './components/reports/sales-view/sales-view.component';
import { TrackingViewComponent } from './components/reports/tracking-view/tracking-view.component';
import { ShippedViewComponent } from './components/reports/shipped-view/shipped-view.component';

const routes: Routes = [
  { path: '', redirectTo:'/shop', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'shop', component: ShoppingCartComponent},
  { path: 'sales', component: SalesViewComponent},
  { path: 'tracking', component:TrackingViewComponent},
  { path: 'shipped', component:ShippedViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
