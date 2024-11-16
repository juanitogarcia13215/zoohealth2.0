import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimpiezaBucalPageRoutingModule } from './limpieza-bucal-routing.module';

import { LimpiezaBucalPage } from './limpieza-bucal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimpiezaBucalPageRoutingModule
  ],
  declarations: [LimpiezaBucalPage]
})
export class LimpiezaBucalPageModule {}
