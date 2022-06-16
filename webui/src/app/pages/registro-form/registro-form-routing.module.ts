import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroFormPage } from './registro-form.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroFormPageRoutingModule {}
