import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotanteListPageRoutingModule } from './votante-list-routing.module';

import { VotanteListPage } from './votante-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotanteListPageRoutingModule
  ],
  declarations: [VotanteListPage]
})
export class VotanteListPageModule {}
