import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage  {

  constructor(private iab: InAppBrowser, public navCtrl: NavController) { }

  fbAMMTAC (){
    this.iab.create('https://www.facebook.com/ammtransfusional/', '_system');
  }

  navegar(ruta: string) {
    this.iab.create(ruta, '_system');
  }
}
