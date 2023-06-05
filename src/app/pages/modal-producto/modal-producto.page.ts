import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.page.html',
  styleUrls: ['./modal-producto.page.scss'],
})
export class ModalProductoPage implements OnInit {

  @Input() producto: any;  
  public price: number;
  public allergens: any;

  constructor(private modalCtrl: ModalController) {
  }
  
  ngOnInit() {
    console.log(this.producto);
    //format price
    this.price = this.producto.price;
    this.price = this.price / 100;
    this.price = parseFloat(this.price.toFixed(2));
    this.allergens = this.producto.allergens;
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
