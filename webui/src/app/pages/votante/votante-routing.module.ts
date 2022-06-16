import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotantePage } from './votante.page';

const routes: Routes = [
  {
    path: '',
    component: VotantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotantePageRoutingModule {}
