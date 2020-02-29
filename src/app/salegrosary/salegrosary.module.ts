import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalegrosaryPageRoutingModule } from './salegrosary-routing.module';

import { SalegrosaryPage } from './salegrosary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalegrosaryPageRoutingModule
  ],
  declarations: [SalegrosaryPage]
})
export class SalegrosaryPageModule {}
