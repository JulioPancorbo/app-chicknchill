import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public user: any = {
    id: 1,
    name: 'Penélope',
    crestas: 4650
  };

  public rewards: any[] = [
    {
      id: 1,
      name: "Patatas Chick 'n' Chill",
      image: "/assets/imgs/nobg/patatas.png",
      crestas: 3000
    },
    {
      id: 2,
      name: "Refresco Refill",
      image: "/assets/imgs/nobg/refresco3.png",
      crestas: 3600
    },
    {
      id: 3,
      name: "Hamburguesa de pollo frito",
      image: "/assets/imgs/nobg/chickenburger.png",
      crestas: 5000
    },
    {
      id: 4,
      name: "Chups 'n' Chill",
      image: "/assets/imgs/nobg/chups5.png",
      crestas: 4200
    },
    {
      id: 5,
      name: "Fingers de pollo",
      image: "/assets/imgs/nobg/fingers.png",
      crestas: 5000
    },
    {
      id: 6,
      name: "Tequeños",
      image: "/assets/imgs/nobg/teques.png",
      crestas: 3000
    }
  ];
  

  constructor(
    private utilities: UtilitiesService,
    public auth: AuthenticationService
  ) {}

  public ngOnInit(): void {
    

    
  }  

  

}
