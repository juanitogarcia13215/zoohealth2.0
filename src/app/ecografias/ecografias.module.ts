import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcografiasPageRoutingModule } from './ecografias-routing.module';

import { EcografiasPage } from './ecografias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcografiasPageRoutingModule
  ],
  declarations: [EcografiasPage]
})
export class EcografiasPageModule {}
