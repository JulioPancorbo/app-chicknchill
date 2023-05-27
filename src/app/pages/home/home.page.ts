import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: any[] = [
    {
      id: 1,
      name: 'Pizza',
      price: 10,
      image: 'https://www.pizzahut.com.pk/images/products/2020/01/01/pepperoni-supreme-regular.png'
    },
    {
      id: 2,
      name: 'Burger',
      price: 5,
      image: 'https://www.pizzahut.com.pk/images/products/2020/01/01/pepperoni-supreme-regular.png'
    }
  ]
    

  constructor(private apiService:ApiService,
    private menuCtrl:MenuController) { }

  public ngOnInit():void{
    this.menuCtrl.enable(true)
  }

}
