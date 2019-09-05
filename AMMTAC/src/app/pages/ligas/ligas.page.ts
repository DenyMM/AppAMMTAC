import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.page.html',
  styleUrls: ['./ligas.page.scss'],
})
export class LigasPage  {

  constructor(private iab: InAppBrowser, public navCtrl: NavController) { }

  videos() {
    this.iab.create('https://ipfa.nl/proceedings', '_blank');
  }

  sangre() {
    this.iab.create('http://www.ipfa.nl/events/ipfa-bca-global-symposium-on-the-future-for-blood-and-plasma-donations', '_blank');
  }

  GCIAMT() {
    this.iab.create('http://www.gciamt.org/', '_blank');
  }

  terapia() {
    this.iab.create('http://sets.es/', '_blank');
  }

  noticias() {
    this.iab.create('https://www.scidev.net/america-latina/gobernanza/noticias/nature-revisa-en-profundidad-la-ciencia-sudamericana.html', '_blank');
  }

  navegar(ruta: string) {
    this.iab.create(ruta, '_system');
  }

  

}
