import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpisokPrepodPage } from './spisok-prepod.page';

const routes: Routes = [
  {
    path: '',
    component: SpisokPrepodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpisokPrepodPageRoutingModule {}
