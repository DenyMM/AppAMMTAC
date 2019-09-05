import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage {

  constructor(public navCtrl: NavController) { }

  async navegarPagina(pagina: any) {
    this.navCtrl.navigateForward('/tabs/tab2/eventos/' + pagina);
  }

}
