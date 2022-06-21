import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroFormPageRoutingModule } from './registro-form-routing.module';

import { RegistroFormPage } from './registro-form.page';
import { DataServiceService } from 'src/app/services/data-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroFormPageRoutingModule
  ],
  declarations: [RegistroFormPage],
  providers:[DataServiceService]
})
export class RegistroFormPageModule {}
