import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-congresos',
  templateUrl: './congresos.page.html',
  styleUrls: ['./congresos.page.scss'],
})
export class CongresosPage {

  constructor(private iab: InAppBrowser,
              private document: DocumentViewer,
              private file: File,
              private platform: Platform,
              private fileOpener: FileOpener,
              // tslint:disable-next-line: deprecation
              private ft: FileTransfer) { }

  inscripcion() {
    this.iab.create('https://www.intermeetingplanner.com/regammtac/index.php?id=nuevo', '_system');
  }


  openLocalPdf() {
    let filePath = this.file.applicationDirectory + 'www/assets';
 
    if (this.platform.is('android')) {
      let fakeName = Date.now();
      this.file.copyFile(filePath, 'Programa_2019.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      })
    } else {
      // Use Document viewer for iOS for a better UI
      const options: DocumentViewerOptions = {
        title: 'Programa'
      }
      this.document.viewDocument(`${filePath}/Programa_2019.pdf`, 'application/pdf', options);
    }
	}
	
	downloadAndOpenPdf() {
		let downloadUrl = 'http://www.paaocancun2019.com/wp-content/uploads/2019/05/programa_paao2.pdf';
		let path = this.file.dataDirectory;
		const transfer = this.ft.create();
	 
		transfer.download(downloadUrl, path + 'programa.pdf').then(entry => {
			let url = entry.toURL();
	 
			if (this.platform.is('ios')) {
				this.document.viewDocument(url, 'application/pdf', {});
			} else {
				this.fileOpener.open(url, 'application/pdf')
					.then(() => console.log('File is opened'))
					.catch(e => console.log('Error opening file', e));
			}
		});
	}




}
