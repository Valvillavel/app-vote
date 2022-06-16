import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTableComponent } from 'src/app/components/data-table/data-table.component';
import { DataServiceService } from 'src/app/services/data-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    NgxDatatableModule,
  ],
  declarations: [
    AdminPage,
    DataTableComponent
  ],
  providers:[DataServiceService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminPageModule {}
