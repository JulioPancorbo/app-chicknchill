import { Component, OnInit } from '@angular/core';

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
      description: 'Descripción',
      image: '/assets/imgs/nobg/chups5.png',
      price: 380
    },
    {
      id: 2,
      name: 'Wrap pollo',
      description: 'Descripción',
      image: '/assets/imgs/nobg/wrap.png',
      price: 400
    },
    {
      id: 3,
      name: 'Fingers',
      description: 'Descripción',
      image: '/assets/imgs/nobg/fingers.png',
      price: 450
    },
    {
      id: 4,
      name: 'Saam tropical',
      description: 'Descripción',
      image: '/assets/imgs/nobg/saam.png',
      price: 350
    },
    {
      id: 5,
      name: "Patatas Chick 'n' Chill",
      description: 'Descripción',
      image: '/assets/imgs/nobg/patatas.png',
      price: 300
    },
    {
      id: 6,
      name: 'Tequeños',
      description: 'Descripción',
      image: '/assets/imgs/nobg/teques.png',
      price: 450
    }
  ];

  public principales: any[] = [
    {
      id: 1,
      name: 'Alitas de pollo',
      description: 'Descripción',
      image: '/assets/imgs/nobg/wings.png',
      price: 400
    },    
    {
      id: 2,
      name: 'Fingers',
      description: 'Descripción',
      image: '/assets/imgs/nobg/fingers.png',
      price: 600
    },
    {
      id: 3,
      name: 'Hamburguesa pollo frito',
      description: 'Descripción',
      image: '/assets/imgs/nobg/chickenburger.png',
      price: 700
    },
    {
      id: 4,
      name: 'Wrap pollo',
      description: 'Descripción',
      image: '/assets/imgs/nobg/wrap.png',
      price: 700
    }
  ];

  public menus: any[] = [
    {
      id: 1,
      name: 'Para 2 personas',
      description: 'Descripción',
      image: '/assets/imgs/nobg/cesta2.png',
      price: 1800
    },
    {
      id: 2,
      name: 'Para 3 personas',
      description: 'Descripción',
      image: '/assets/imgs/nobg/cesta3.png',
      price: 2300
    },
    {
      id: 3,
      name: 'Para 4 personas',
      description: 'Descripción',
      image: '/assets/imgs/nobg/cesta4.png',
      price: 2900
    },
    {
      id: 4,
      name: 'Súper menú',
      description: 'Descripción',
      image: '/assets/imgs/nobg/cestapara3.png',
      price: 2000
    }
  ];

  public bebidas: any[] = [
    {
      id: 1,
      name: 'Refrescos',
      description: 'Descripción',
      image: '/assets/imgs/nobg/refresco3.png',
      price: 300
    },
    {
      id: 2,
      name: 'Cervezas',
      description: 'Descripción',
      image: '/assets/imgs/nobg/beer.png',
      price: 200
    },
    {
      id: 3,
      name: 'Agua',
      description: 'Descripción',
      image: '/assets/imgs/nobg/water.png',
      price: 120
    }
  ];

  public salsas: any[] = [
    {
      id: 1,
      name: 'Mayo picante',
      description: 'Descripción',
      image: '/assets/imgs/nobg/mayopicante.png',
      price: 40      
    },
    {
      id: 2,
      name: 'Barbacoa',
      description: 'Descripción',
      image: '/assets/imgs/nobg/bbq.png',
      price: 60
    },
    {
      id: 3,
      name: 'Guacamole',
      description: 'Descripción',
      image: '/assets/imgs/nobg/guacamole.png',
      price: 60
    },
    {
      id: 4,
      name: 'Cheddar',
      description: 'Descripción',
      image: '/assets/imgs/nobg/cheddar.png',
      price: 50
    },
    {
      id: 5,
      name: 'Ranchera',
      description: 'Descripción',
      image: '/assets/imgs/nobg/ranchera.png',
      price: 40
    },
    {
      id: 6,
      name: 'Búfalo',
      description: 'Descripción',
      image: '/assets/imgs/nobg/buffalo.png',
      price: 40
    }
  ];

  public postres: any[] = [
    {
      id: 1,
      name: "Chick 'n' Roll",
      description: 'Descripción',
      image: '/assets/imgs/nobg/chicknroll.png',
      price: 350
    },
    {
      id: 2,
      name: 'Tarta zanahoria',
      description: 'Descripción',
      image: '/assets/imgs/nobg/carrotcake.png',
      price: 300
    },
    {
      id: 3,
      name: 'Cheesecake',
      description: 'Descripción',
      image: '/assets/imgs/nobg/cheesecake.png',
      price: 500
    },
    {
      id: 4,
      name: 'Tiramisú',
      description: 'Descripción',
      image: '/assets/imgs/nobg/tiramisu.png',
      price: 400
    },
    {
      id: 5,
      name: 'Eclair',
      description: 'Descripción',
      image: '/assets/imgs/nobg/eclair.png',
      price: 380
    }
  ];

  constructor() {
    this.segmentSelected = 'entrantes';
   }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.segmentSelected = ev.detail.value;
  }

}
