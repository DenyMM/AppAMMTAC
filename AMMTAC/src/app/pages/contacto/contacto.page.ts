import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage  {

  constructor(private iab: InAppBrowser) { }

  fbAMMTAC (){
    this.iab.create('https://www.facebook.com/ammtransfusional/', '_system');
  }

}
