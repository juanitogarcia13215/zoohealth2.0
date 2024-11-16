import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckGeneralPage } from './check-general.page';

const routes: Routes = [
  {
    path: '',
    component: CheckGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckGeneralPageRoutingModule {}
