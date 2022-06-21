import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotanteListPageRoutingModule } from './votante-list-routing.module';

import { VotanteListPage } from './votante-list.page';
import { DataServiceService } from 'src/app/services/data-service.service';
import { DataTableComponent } from 'src/app/components/data-table/data-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotanteListPageRoutingModule
  ],
  providers:[DataServiceService],
  declarations: [VotanteListPage,DataTableComponent,],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class VotanteListPageModule {}
