import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaspAuditorPage } from './rasp-auditor.page';

const routes: Routes = [
  {
    path: '',
    component: RaspAuditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaspAuditorPageRoutingModule {}
