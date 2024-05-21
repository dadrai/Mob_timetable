import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaspPrepodPage } from './rasp-prepod.page';

const routes: Routes = [
  {
    path: '',
    component: RaspPrepodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaspPrepodPageRoutingModule {}
