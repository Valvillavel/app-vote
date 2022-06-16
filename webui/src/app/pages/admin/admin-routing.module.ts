import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'add/:user',
    loadChildren: () => import('../registro-form/registro-form-routing.module').then( m => m.RegistroFormPageRoutingModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('../registro-form/registro-form-routing.module').then( m => m.RegistroFormPageRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
