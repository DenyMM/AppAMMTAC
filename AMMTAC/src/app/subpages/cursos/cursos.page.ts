import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage {

  constructor(private iab: InAppBrowser) { }

  mapaCurso(){
    this.iab.create('https://www.google.com.mx/maps/place/Pet%C3%A9n+418,+Vertiz+Narvarte,+03600+V%C3%A9rtz+Narvarte,+D.F./@19.38338,-99.1538092,18z/data=!4m2!3m1!1s0x85d1ffa9b363e239:0x361eacca9335ac4d', '_system');
  }
  linkOne() {
    this.iab.create('http://www.aulademedicina.com.ar/detalle_curso.php?id_cursos=94', '_system');
  }
  linkTwo() {
    this.iab.create('http://www.aulademedicina.com.ar/detalle_curso.php?id_cursos=93', '_system');
  }


}
