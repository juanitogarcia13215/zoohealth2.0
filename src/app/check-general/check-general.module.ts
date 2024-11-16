import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckGeneralPageRoutingModule } from './check-general-routing.module';

import { CheckGeneralPage } from './check-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckGeneralPageRoutingModule
  ],
  declarations: [CheckGeneralPage]
})
export class CheckGeneralPageModule {}
