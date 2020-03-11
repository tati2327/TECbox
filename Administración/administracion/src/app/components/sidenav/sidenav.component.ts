import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher} from '@angular/cdk/layout'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    { name:"Gestión de Roles",route:"roles",icon:"assignment_ind"},
    { name:"Gestión de Sucursales",route:"sucursales",icon: "apartment"},
    { name:"Gestión de Trabajadores",route:"trabajadores",icon: "supervisor_account"},
    { name:"Gestión de Vendedores",route:"vendedores",icon: "card_travel"},
    { name:"Gestión de Productos",route:"productos",icon: "view_comfy"},
    { name:"Gestión de Rutas",route:"rutas",icon: "gps_fixed"},
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit(): void {
  }

}
