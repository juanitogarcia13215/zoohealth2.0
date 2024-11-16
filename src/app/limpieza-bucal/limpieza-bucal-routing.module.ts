import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimpiezaBucalPage } from './limpieza-bucal.page';

const routes: Routes = [
  {
    path: '',
    component: LimpiezaBucalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimpiezaBucalPageRoutingModule {}
