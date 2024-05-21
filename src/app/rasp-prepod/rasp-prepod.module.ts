import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaspPrepodPageRoutingModule } from './rasp-prepod-routing.module';

import { RaspPrepodPage } from './rasp-prepod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaspPrepodPageRoutingModule
  ],
  declarations: [RaspPrepodPage]
})
export class RaspPrepodPageModule {}
