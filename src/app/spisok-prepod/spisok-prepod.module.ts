import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpisokPrepodPageRoutingModule } from './spisok-prepod-routing.module';

import { SpisokPrepodPage } from './spisok-prepod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpisokPrepodPageRoutingModule
  ],
  declarations: [SpisokPrepodPage]
})
export class SpisokPrepodPageModule {}
