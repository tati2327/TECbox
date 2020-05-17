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
import { ReportsComponent } from './components/reports/reports.component';
import { SalesViewComponent } from './components/reports/sales-view/sales-view.component';
import { TrackingViewComponent } from './components/reports/tracking-view/tracking-view.component';
import { ShippedViewComponent } from './components/reports/shipped-view/shipped-view.component';
import { TablesComponent } from './components/reports/tables/tables.component';
import { TrackTableComponent } from './components/reports/tables/track-table/track-table.component';
import { ShipTableComponent } from './components/reports/tables/ship-table/ship-table.component';
import { SalesTableComponent } from './reports/sales-view/sales-table/sales-table.component';



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
    ReportsComponent,
    SalesViewComponent,
    TrackingViewComponent,
    ShippedViewComponent,
    TablesComponent,
    TrackTableComponent,
    ShipTableComponent,
    SalesTableComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
