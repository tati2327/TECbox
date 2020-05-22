import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/sharedComponents/header/header.component';
import { FooterComponent } from 'src/app/components/sharedComponents/footer/footer.component';
import { NavComponent } from 'src/app/components/sharedComponents/nav/nav.component';
import { ShoppingCartComponent } from 'src/app/components/clientComponents/shopping-cart/shopping-cart.component';
import { FiltersComponent } from 'src/app/components/clientComponents/shopping-cart/filters/filters.component';
import { ProductListComponent } from 'src/app/components/clientComponents/shopping-cart/product-list/product-list.component';
import { CartComponent } from 'src/app/components/clientComponents/shopping-cart/cart/cart.component';
import { CartItemComponent } from 'src/app/components/clientComponents/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from 'src/app/components/clientComponents/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from 'src/app/components/clientComponents/login/login.component';
import { RegisterComponent } from 'src/app/components/clientComponents/register/register.component';
import { PageNotFoundComponent } from 'src/app/components/sharedComponents/page-not-found/page-not-found.component';
import { TrackComponent } from 'src/app/components/clientComponents/track/track.component';
import { CheckOutComponent } from 'src/app/components/clientComponents/check-out/check-out.component';
import { OrderPlacedComponent } from 'src/app/components/clientComponents/order-placed/order-placed.component';
import { ManagementComponent } from 'src/app/components/clientComponents/management/management.component';
import { ModifyComponent } from 'src/app/components/clientComponents/modify/modify.component';
import { DeleteComponent } from 'src/app/components/clientComponents/delete/delete.component';

import { SalesViewComponent } from 'src/app/components/reportsComponents/sales-view/sales-view.component';
import { TrackingViewComponent } from 'src/app/components/reportsComponents/tracking-view/tracking-view.component';
import { ShippedViewComponent } from 'src/app/components/reportsComponents/shipped-view/shipped-view.component';
import { TablesComponent } from 'src/app/components/reportsComponents/tables/tables.component';
import { TrackTableComponent } from 'src/app/components/reportsComponents/tables/track-table/track-table.component';
import { ShipTableComponent } from 'src/app/components/reportsComponents/tables/ship-table/ship-table.component';
import { RouterModule } from '@angular/router';

import { RolesComponent } from './components/adminComponents/roles/roles.component';
import { SucursalesComponent } from './components/adminComponents/sucursales/sucursales.component';
import { TrabajadoresComponent } from './components/adminComponents/trabajadores/trabajadores.component';
import { VendedoresComponent } from './components/adminComponents/vendedores/vendedores.component';
import { ProductosComponent } from './components/adminComponents/productos/productos.component';
import { RutasComponent } from './components/adminComponents/rutas/rutas.component';

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
    PageNotFoundComponent,
    TrackComponent,
    CheckOutComponent,
    OrderPlacedComponent,
    ManagementComponent,
    ModifyComponent,
    DeleteComponent,

    SalesViewComponent,
    TrackingViewComponent,
    ShippedViewComponent,
    TablesComponent,
    TrackTableComponent,
    ShipTableComponent,

    RolesComponent,
    SucursalesComponent,
    TrabajadoresComponent,
    VendedoresComponent,
    ProductosComponent,
    RutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
