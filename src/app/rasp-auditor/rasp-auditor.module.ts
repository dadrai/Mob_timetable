import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaspAuditorPageRoutingModule } from './rasp-auditor-routing.module';

import { RaspAuditorPage } from './rasp-auditor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaspAuditorPageRoutingModule
  ],
  declarations: [RaspAuditorPage]
})
export class RaspAuditorPageModule {}
