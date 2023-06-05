import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { ModalProductoPage } from '../modal-producto/modal-producto.page';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {

  public segmentSelected: string;

  // public promotions: any[] = [
  //   {
  //     id: 1,
  //     name: 'Promoción 1',
  //     description: 'Descripción de la promoción 1',
  //     image: 'https://via.placeholder.com/150',
  //     price: 100
  //   },
  //   {
  //     id: 2,
  //     name: 'Promoción 2',
  //     description: 'Descripción de la promoción 2',
  //     image: 'https://via.placeholder.com/150',
  //     price: 200
  //   }
  // ];

  public entrantes: any[] = [
    {
      id: 1,
      name: "Chups 'n' Chill",
      description: 'Deliciosos Chupa-Chups de crujiente pollo marinado en especias',
      image: '/assets/imgs/nobg/chups5.png',
      price: 380,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}]
    },
    {
      id: 2,
      name: 'Wrap pollo',
      description: '¡La opción más enrollada! Tortilla de trigo rellena de pollo frito, queso Cheddar, tomate, guacamole, pico de gallo y un toque de salsa ranchera',
      image: '/assets/imgs/nobg/wrap.png',
      price: 400,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'mostaza', icon: '/assets/icons/mostaza.png'}, {name: 'sulfitos', icon: '/assets/icons/sulfitos.png'}]
    },
    {
      id: 3,
      name: 'Fingers de pollo',
      description: 'Crujientes tiras de pechuga de pollo marinadas, acompañadas de una deliciosa salsa BBQ',
      image: '/assets/imgs/nobg/fingers.png',
      price: 450,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'pescado', icon: '/assets/icons/pescado.png'}, {name: 'apio', icon: '/assets/icons/apio.png'}]
    },
    {
      id: 4,
      name: 'Saam tropical',
      description: 'Barquitas de lechuga con pollo frito, tierra de aceitas negras y salsa rosa',
      image: '/assets/imgs/nobg/saam.png',
      price: 350,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'sulfitos', icon: '/assets/icons/sulfitos.png'}]
    },
    {
      id: 5,
      name: "Patatas Chick 'n' Chill",
      description: "'Papas' de Sanlúcar fritas y sazonadas con especias, acompañadas de nuestra fantástica salsa ranchera",
      image: '/assets/imgs/nobg/patatas.png',
      price: 300,
      allergens: [{name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'sulfitos', icon: '/assets/icons/sulfitos.png'}, {name: 'mostaza', icon: '/assets/icons/mostaza.png'}]
    },
    {
      id: 6,
      name: 'Tequeños',
      description: 'Palitos de queso fundido cubiertos de masa de harina de trigo',
      image: '/assets/imgs/nobg/teques.png',
      price: 450,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}]
    }
  ];

  public principales: any[] = [
    {
      id: 1,
      name: 'Alitas de pollo',
      description: 'Prueba nuestras deliciosas alitas de pollo, crujientes por fuera y jugosas por dentro',
      image: '/assets/imgs/nobg/wings.png',
      price: 400,
      allergens: []
    },    
    {
      id: 2,
      name: 'Fingers de pollo',
      description: 'Crujientes tiras de pechuga de pollo marinadas, acompañadas de una deliciosa salsa BBQ',
      image: '/assets/imgs/nobg/fingers.png',
      price: 600,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'pescado', icon: '/assets/icons/pescado.png'}, {name: 'apio', icon: '/assets/icons/apio.png'}]
    },
    {
      id: 3,
      name: 'Hamburguesa pollo frito',
      description: 'Hamburguesa de pechuga de pollo crujiente, con lechuga, tomate y mayonesa',
      image: '/assets/imgs/nobg/chickenburger.png',
      price: 700,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'mostaza', icon: '/assets/icons/mostaza.png'}, {name: 'sulfitos', icon: '/assets/icons/sulfitos.png'}]
    },
    {
      id: 4,
      name: 'Wrap pollo',
      description: '¡La opción más enrollada! Tortilla de trigo rellena de pollo frito, queso Cheddar, tomate, guacamole, pico de gallo y un toque de salsa ranchera',
      image: '/assets/imgs/nobg/wrap.png',
      price: 700,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'mostaza', icon: '/assets/icons/mostaza.png'}, {name: 'sulfitos', icon: '/assets/icons/sulfitos.png'}]
    }
  ];

  public menus: any[] = [
    {
      id: 1,
      name: 'Para 2 personas',
      description: 'Disfruta de una fantástica comida para dos personas, la cesta incluye: 10 fingers de pollo, 2 tequeños ó 2 alitas, una salsa a elegir. Además, incluye 2 patatas refill y 2 bebidas a elegir entre refresco refill, cerveza o agua',
      image: '/assets/imgs/nobg/cesta2.png',
      price: 1800,
      allergens: []
    },
    {
      id: 2,
      name: 'Para 3 personas',
      description: 'Disfruta de una fantástica comida para tres personas, la cesta incluye: 15 fingers de pollo, 3 tequeños ó 3 alitas, dos salsas a elegir. Además, incluye 3 patatas refill y 3 bebidas a elegir entre refresco refill, cerveza o agua',
      image: '/assets/imgs/nobg/cesta3.png',
      price: 2300,
      allergens: []
    },
    {
      id: 3,
      name: 'Para 4 personas',
      description: 'Disfruta de una fantástica comida para cuatro personas, la cesta incluye: 20 fingers de pollo, 4 tequeños ó 4 alitas, tres salsas a elegir. Además, incluye 4 patatas refill y 4 bebidas a elegir entre refresco refill, cerveza o agua',
      image: '/assets/imgs/nobg/cesta4.png',
      price: 2900,
      allergens: []
    },
    {
      id: 4,
      name: 'Súper menú',
      description: '¡La opción más completa!, la súper cesta incluye: 2 wraps de pollo, 4 fingers, 2 alitas y 2 tequeños. Además, incluye 3 patatas refill y 3 bebidas a elegir entre refresco refill, cerveza o agua',
      image: '/assets/imgs/nobg/cestapara3.png',
      price: 2000,
      allergens: []
    }
  ];

  public bebidas: any[] = [
    {
      id: 1,
      name: 'Refrescos',
      description: '¿Tienes sed?, prueba nuestros refrescos refill y repite las veces que quieras',
      image: '/assets/imgs/nobg/refresco3.png',
      price: 300,
      allergens: []
    },
    {
      id: 2,
      name: 'Cervezas',
      description: 'Elige entre nuestra selección de cervezas',
      image: '/assets/imgs/nobg/beer.png',
      price: 200,
      allergens: []
    },
    {
      id: 3,
      name: 'Agua',
      description: '¿Necesitas algo para refrescarte?, prueba nuestra agua mineral',
      image: '/assets/imgs/nobg/water.png',
      price: 120,
      allergens: []
    }
  ];

  public salsas: any[] = [
    {
      id: 1,
      name: 'Mayo picante',
      description: 'Una mayonesa tradicional con un toque de sriracha para darle un toque picante',
      image: '/assets/imgs/nobg/mayopicante.png',
      price: 40,
      allergens: [{name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'sulfitos', icon: '/assets/icons/sulfitos.png'}]      
    },
    {
      id: 2,
      name: 'Barbacoa',
      description: 'Auténtica salsa barbacoa americana con un toque ahumado',
      image: '/assets/imgs/nobg/bbq.png',
      price: 60,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'pescado', icon: '/assets/icons/pescado.png'}, {name: 'apio', icon: '/assets/icons/apio.png'}]
    },
    {
      id: 3,
      name: 'Guacamole',
      description: 'Auténtico guacamole mexicano, elaborado con aguacates frescos y pico de gallo',
      image: '/assets/imgs/nobg/guacamole.png',
      price: 60,
      allergens: []
    },
    {
      id: 4,
      name: 'Cheddar',
      description: 'Salsa de queso cheddar fundido, ¡para los amantes del queso!',
      image: '/assets/imgs/nobg/cheddar.png',
      price: 50,
      allergens: [{name: 'lacteos', icon: '/assets/icons/lacteos.png'}]
    },
    {
      id: 5,
      name: 'Ranchera',
      description: 'Nuestra salsa favorita, ¡no podrás parar de comerla!',
      image: '/assets/imgs/nobg/ranchera.png',
      price: 40,
      allergens: [{name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'mostaza', icon: '/assets/icons/mostaza.png'}, {name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'sulfitos', icon: '/assets/icons/sulfitos.png'}]
    },
    {
      id: 6,
      name: 'Búfalo',
      description: 'Salsa picante de búfalo, ¡para los amantes del picante!',
      image: '/assets/imgs/nobg/buffalo.png',
      price: 40,
      allergens: [{name: 'sulfitos', icon: '/assets/icons/sulfitos.png'}]
    }
  ];

  public postres: any[] = [
    {
      id: 1,
      name: "Chick 'n' Roll",
      description: 'Masa de hojaldre relleno de pistacho y frambuesa, ¡una delicia!',
      image: '/assets/imgs/nobg/chicknroll.png',
      price: 350,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'frutos de cáscara', icon: '/assets/icons/frutos-cascara.png'}]
    },
    {
      id: 2,
      name: 'Tarta zanahoria',
      description: 'Porción de bizcocho de zanahoria, con trozos de pistachos y nueces',
      image: '/assets/imgs/nobg/carrotcake.png',
      price: 300,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'frutos de cascara', icon: '/assets/icons/frutos-cascara.png'}, {name: 'sulfitos', icon: '/assets/icons/sulfitos.png'}]
    },
    {
      id: 3,
      name: 'Cheesecake',
      description: 'Porción de tarta de queso casera con interior de tu fruta de temporada favorita',
      image: '/assets/imgs/nobg/cheesecake.png',
      price: 500,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}, {name: 'huevos', icon: '/assets/icons/huevos.png'}]
    },
    {
      id: 4,
      name: 'Tiramisú',
      description: 'Café, bizcocho y auténtico mascarpone italiano. ¡Presentado de una forma que te sorprenderá!',
      image: '/assets/imgs/nobg/tiramisu.png',
      price: 400,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'lacteos', icon: '/assets/icons/lacteos.png'}]
    },
    {
      id: 5,
      name: 'Eclair',
      description: 'Nuestro postre más fino: masa de profiterol rellena de chocolate y naranja',
      image: '/assets/imgs/nobg/eclair.png',
      price: 380,
      allergens: [{name: 'gluten', icon: '/assets/icons/gluten.png'}, {name: 'huevos', icon: '/assets/icons/huevos.png'}, {name: 'lacteos', icon: 'assets/icons/lacteos.png'}]
    }
  ];  

  constructor(private modalCtrl: ModalController) {
    this.segmentSelected = 'entrantes';
   }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.segmentSelected = ev.detail.value;
  }

  async presentModal(producto) {
    const modal = await this.modalCtrl.create({
      component: ModalProductoPage,
      mode: 'ios',      
      // enterAnimation: myEnterAnimation,
      // leaveAnimation: myLeaveAnimation,
      cssClass: 'modal-producto',
      componentProps: {
        producto: producto
      }
    });
    return await modal.present();
  }

}
