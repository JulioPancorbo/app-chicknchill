import { Injectable, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from '../models/Cart';
import { Coupon } from '../models/Coupon';
import { Product } from '../models/Product';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemCount = new BehaviorSubject<number>(0);
  public cartChanges = new Subject<Cart>();
  public cart: Cart;
  public restaurant_id_selected: number;


  constructor(private alertCtrl: AlertController, private utilities: UtilitiesService,
    private ngZone: NgZone) {
    this.cart = {
      total_price: 0,
      restaurant_id_selected: 0,
      products: [],
      coupon_selected: null,
      home_delivery: true,
      address: null
    }
  }


  //Añadir un producto
  public addProduct(product: Product): void {
    let added = false;
    for (let p of this.cart.products) {
      if (p.id === product.id) {
        p.quantity += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.quantity = 1;
      console.log("pushed");
      console.log(this.cart);
      this.utilities.showToast("Producto añadido al carrito");
      this.cart.products.push(product);
    }
    this.cart.total_price += Number(product.price);
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  //Remover (1) producto
  public async decreaseProduct(product: Product) {
    for (let [index, p] of this.cart.products.entries()) {
      if (product.id == p.id) {
        if (p.quantity == 1) {
          const alert = await this.alertCtrl.create({
            header: 'Borrar producto',
            message: '¿Quieres eliminar el producto del carrito?',
            buttons: [
              {
                text: 'Cancelar',
                role: 'cancel',
                handler: () => {
                }
              }, {
                text: 'Aceptar',
                handler: () => {
                  this.ngZone.run(() => {
                    this.utilities.showToast("Producto borrado del carrito");
                    this.cart.products.splice(index, 1);
                    this.cart.total_price -= Number(product.price);
                    this.cartItemCount.next(this.cartItemCount.value - 1);
                  });


                }
              }
            ]
          });

          await alert.present();

        } else {

          p.quantity -= 1;
          this.cart.total_price -= Number(product.price);
          this.cartItemCount.next(this.cartItemCount.value - 1);
        }
      }

    }

  }

  //Borrar producto del carrito
  public async deleteProduct(product: Product) {
    for (let [index, p] of this.cart.products.entries()) {
      if (p.id === product.id) {
        const alert = await this.alertCtrl.create({
          header: 'Borrar producto',
          message: '¿Quieres eliminar el producto del carrito?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
              }
            }, {
              text: 'Aceptar',
              handler: () => {
                this.ngZone.run(() => {
                  this.utilities.showToast("Producto borrado del carrito");
                  this.cart.products.splice(index, 1);

                  this.cart.total_price -= Number(product.price) * product.quantity;

                  this.cartItemCount.next(this.cartItemCount.value - product.quantity);
                });


              }
            }
          ]
        });

        await alert.present();

      }
    }
  }


  public getProducts(): Product[] {
    return this.cart.products;
  }

  
  public getCart(): Cart {
    return this.cart;
  }

  public clearCart(): void {
    this.ngZone.run(() => {
      this.cart.total_price = 0;
      this.cart.products = [];
      this.cart.coupon_selected = null;
      this.cartItemCount.next(0);
      this.cart.address = null;
    });
  }

  public setRestaurantIdSelected(restaurant_id_selected): void {
    this.restaurant_id_selected = restaurant_id_selected;
    this.cart.restaurant_id_selected = this.restaurant_id_selected;
    console.log("Actualizado", this.restaurant_id_selected);

  }

  public getRestaurantIdSelected(): number {
    return this.restaurant_id_selected;
  }


  public getCartItemCount() {
    return this.cartItemCount;
  }

  public setCoupon(coupon: Coupon): void {
    this.cart.coupon_selected = coupon;
  }

  public getSelectedCoupon(): Coupon {
    return this.cart.coupon_selected;
  }

  public getCartTotalPrice(): number {
    if (this.cart.coupon_selected) {
      this.cart.total_price - this.cart.coupon_selected.discount;
    } else {
      return this.cart.total_price;
    }
  }

  public setHomeDelivery(home_delivery): void {
    this.ngZone.run(() => {
      this.cart.home_delivery = home_delivery;
    })

  }

  public getHomeDelivery(): boolean {
    return this.cart.home_delivery;
  }

  public setSelectedAddress(address): void {
    this.ngZone.run(() => {
      this.cart.address = address;
    });
  }

  public getSelectedAddress(): any {
    return this.cart.address;
  }
}