import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private iab: InAppBrowser) {}

  live() {
    this.iab.create('https://jc-innovation.com/ammtac/', '_system');
  }

}
