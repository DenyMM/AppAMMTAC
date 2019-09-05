import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private iab: InAppBrowser) {}

  revista() {
    this.iab.create('http://www.ammtac.org/espanol/page.asp?fkTipoArticulo=15', '_system');
  }

  sesiones() {
    this.iab.create('http://www.ammtac.org/espanol/RegistroAsociado.asp?Referer=%2Fespanol%2Fpage%2Easp%3FAccion%3DVerRegistro%26fkPage%3D519%26NombreABC%3D%26BuscarfkPromocion%3D%26BuscarEsNovedad%3D%26BuscarEsRecomendacion%3D%26Keywords%3D%26NoPagina%3D%26', '_system');
  }

}
