import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, private iab: InAppBrowser) {}

  async presentAlert() {
    const alert = await this.alertController.create({

      header: 'No olvides asistir a ',
      subHeader: 'XXVII Congreso de la Asociación Mexicana de Medicina Transfucional, A.C.',
      message: 'Comienza el 25 de Septiembre en Monterrey Nuevo León.',
      buttons: [
        {
          text: 'Cancelar', 
          role: 'cancel',
          cssClass: 'danger'
        },
        {
          text: 'Información',
          handler: () => {  this.congress();
          }
        }
      ]
    });

    await alert.present();

}

congress() {
  this.iab.create('http://www.ammtac.org/espanol/page.asp?Accion=VerRegistro&fkPage=528&NombreABC=&BuscarfkPromocion=&BuscarEsNovedad=&BuscarEsRecomendacion=&Keywords=&NoPagina=', '_system'  );
}
}
