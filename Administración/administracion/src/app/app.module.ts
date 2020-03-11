 /**
  * MODULOS
  */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//import { MatSliderModule } from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';

/**
 * COMPONENTES
 */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent} from './components/menu/menu.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RolesComponent } from './components/roles/roles.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RutasComponent } from './components/rutas/rutas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SidenavComponent,
    RolesComponent,
    SucursalesComponent,
    TrabajadoresComponent,
    VendedoresComponent,
    ProductosComponent,
    RutasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
