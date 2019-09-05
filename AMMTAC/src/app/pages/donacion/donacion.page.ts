import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.page.html',
  styleUrls: ['./donacion.page.scss'],
})
export class DonacionPage {

  constructor(private iab: InAppBrowser, public navCtrl: NavController) { }

  directorio() {
    this.iab.create('http://www.ammtac.org/espanol/DirectorioBS.asp', '_system');
  }

  altruista() {
    this.iab.create('http://www.ammtac.org/espanol/page.asp?Accion=VerRegistro&fkPage=268&NombreABC=&BuscarfkPromocion=&BuscarEsNovedad=&BuscarEsRecomendacion=&Keywords=&NoPagina=', '_system');
  }

  video() {
    this.iab.create('https://www.youtube.com/watch?v=X6WEMPTHHEc&feature=youtu.be', '_system');
  }

  navegar(ruta: string) {
    this.iab.create(ruta, '_system');
  }


  async navegarPagina(pagina: any) {
    this.navCtrl.navigateForward('/tabs/tab2/donacion/' + pagina);
  }


}
