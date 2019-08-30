import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-asociacion',
  templateUrl: './asociacion.page.html',
  styleUrls: ['./asociacion.page.scss'],
})
export class AsociacionPage  implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  solicitud() {
    this.iab.create('http://www.ammtac.org/espanol/RegistroPreAsociado.asp?fkTipoArticulo=3', '_system');
  }
  listado() {
    this.iab.create('http://www.ammtac.org/espanol/ListadoSociosActivos.asp?fkTipoArticulo=3', '_system');
  }


}
