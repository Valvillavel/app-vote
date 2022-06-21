import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatoListPageRoutingModule } from './candidato-list-routing.module';

import { CandidatoListPage } from './candidato-list.page';
import { DataTableComponent } from 'src/app/components/data-table/data-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatoListPageRoutingModule
  ],
  declarations: [CandidatoListPage,DataTableComponent,],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class CandidatoListPageModule {}
