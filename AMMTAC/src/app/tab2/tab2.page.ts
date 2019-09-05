import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private iab: InAppBrowser, public navCtrl: NavController) {}

  live() {
    this.iab.create('https://jc-innovation.com/ammtac/', '_system');
  }

  navegar(ruta: string) {
    this.iab.create(ruta, '_system');
  }


  async navegarPagina(pagina: any) {
    this.navCtrl.navigateForward('/tabs/tab2/' + pagina);
  }

}
