import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroFormPageRoutingModule } from './registro-form-routing.module';

import { RegistroFormPage } from './registro-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroFormPageRoutingModule
  ],
  declarations: [RegistroFormPage]
})
export class RegistroFormPageModule {}
