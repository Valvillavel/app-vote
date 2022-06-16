import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotanteListPage } from './votante-list.page';

const routes: Routes = [
  {
    path: '',
    component: VotanteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotanteListPageRoutingModule {}
