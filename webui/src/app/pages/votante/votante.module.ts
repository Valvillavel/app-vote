import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotantePageRoutingModule } from './votante-routing.module';

import { VotantePage } from './votante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotantePageRoutingModule
  ],
  declarations: [VotantePage]
})
export class VotantePageModule {}
