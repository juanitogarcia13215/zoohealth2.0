import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckPersonalPage } from './check-personal.page';

const routes: Routes = [
  {
    path: '',
    component: CheckPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckPersonalPageRoutingModule {}
