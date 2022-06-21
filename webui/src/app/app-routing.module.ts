import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'registro-form',
    loadChildren: () => import('./pages/registro-form/registro-form.module').then( m => m.RegistroFormPageModule)
  },
  {
    path: 'candidato',
    loadChildren: () => import('./pages/candidato/candidato.module').then( m => m.CandidatoPageModule)
  },
  {
    path: 'votante',
    loadChildren: () => import('./pages/votante/votante.module').then( m => m.VotantePageModule)
  },
  {
    path: 'votante-list',
    loadChildren: () => import('./pages/votante-list/votante-list.module').then( m => m.VotanteListPageModule)
  },
  {
    path: 'candidato-list',
    loadChildren: () => import('./pages/candidato-list/candidato-list.module').then( m => m.CandidatoListPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
