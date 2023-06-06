import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { ModalEscanerPage } from '../modal-escaner/modal-escaner.page';

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }  

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalEscanerPage,
      mode: 'ios',      
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation,
      cssClass: 'modal-escaner',
      backdropDismiss: true
    });
    return await modal.present();
  }

}
