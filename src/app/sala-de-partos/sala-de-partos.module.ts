import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaDePartosPageRoutingModule } from './sala-de-partos-routing.module';

import { SalaDePartosPage } from './sala-de-partos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaDePartosPageRoutingModule
  ],
  declarations: [SalaDePartosPage]
})
export class SalaDePartosPageModule {}
