import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule) },
      { path: 'carta', loadChildren: () => import('../carta/carta.module').then(m => m.CartaPageModule) },
      { path: 'escaner', loadChildren: () => import('../escaner/escaner.module').then(m => m.EscanerPageModule) },
      { path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule) },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
