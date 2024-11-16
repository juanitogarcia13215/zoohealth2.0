import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckPersonalPageRoutingModule } from './check-personal-routing.module';

import { CheckPersonalPage } from './check-personal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckPersonalPageRoutingModule
  ],
  declarations: [CheckPersonalPage]
})
export class CheckPersonalPageModule {}
