import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'cover-page', pathMatch: 'full' },
  { path: 'cover-page', loadChildren: () => import('./pages/cover-page/cover-page.module').then(m => m.CoverPagePageModule) },
  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  // canActivate: [AuthGuard],
  { path: 'details', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule) },
  { path: 'forgot-password', loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule) },
  { path: 'chats', loadChildren: () => import('./pages/chats/chats.module').then(m => m.ChatsPageModule) },
  { path: 'interior-chat/:id_chat/:nombre_chat/:ultimo_mensaje', loadChildren: () => import('./pages/interior-chat/interior-chat.module').then(m => m.InteriorChatPageModule) },
  { path: 'tabs', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'carta', loadChildren: () => import('./pages/carta/carta.module').then(m => m.CartaPageModule) },
  { path: 'escaner', loadChildren: () => import('./pages/escaner/escaner.module').then(m => m.EscanerPageModule) },  { path: 'modal-producto', loadChildren: './pages/modal-producto/modal-producto.module#ModalProductoPageModule' },

  // , canActivate: [AuthGuard]



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
