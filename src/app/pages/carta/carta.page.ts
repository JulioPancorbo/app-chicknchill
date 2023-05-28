import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {

  public segmentSelected: string;

  constructor() {
    this.segmentSelected = 'promotions';
   }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.segmentSelected = ev.detail.value;
  }

}
