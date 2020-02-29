import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalegrosaryPage } from './salegrosary.page';

const routes: Routes = [
  {
    path: '',
    component: SalegrosaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalegrosaryPageRoutingModule {}
