import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public pages = [
    { tab: 'home', name: 'Inicio', icon: '/assets/icons/home.svg' },
    { tab: 'carta', name: 'Carta', icon: '/assets/icons/book.svg' },
    { tab: 'escaner', name: 'Escáner', icon: '/assets/icons/qrcode.svg' },
    { tab: 'profile', name: 'Perfil', icon: '/assets/icons/profile-circle.svg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
