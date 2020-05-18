import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { BodegViewComponent } from './components/bodeg-view/bodeg-view.component';
import { RolesComponent } from './components/admin-view/roles/roles.component';
import { SucursalesComponent } from './components/admin-view/sucursales/sucursales.component';
import { TrabajadoresComponent } from './components/admin-view/trabajadores/trabajadores.component';
import { VendedoresComponent } from './components/admin-view/vendedores/vendedores.component';
import { ProductosComponent } from './components/admin-view/productos/productos.component';
import { RutasComponent } from './components/admin-view/rutas/rutas.component';
import { PaquetesComponent } from './components/bodeg-view/paquetes/paquetes.component';
import { RastreoPaquetesComponent } from './components/bodeg-view/rastreo-paquetes/rastreo-paquetes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    AdminViewComponent,
    BodegViewComponent,
    RolesComponent,
    SucursalesComponent,
    TrabajadoresComponent,
    VendedoresComponent,
    ProductosComponent,
    RutasComponent,
    PaquetesComponent,
    RastreoPaquetesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
