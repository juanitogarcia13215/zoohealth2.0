import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcografiasPage } from './ecografias.page';

const routes: Routes = [
  {
    path: '',
    component: EcografiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcografiasPageRoutingModule {}
