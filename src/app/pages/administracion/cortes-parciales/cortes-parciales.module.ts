import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CortesParcialesPage } from './cortes-parciales.page';
import { ComponentsModule } from '../../../components/components.module';
import { CorteParcialModalComponent } from '../../../components/corte-parcial-modal/corte-parcial-modal.component';

const routes: Routes = [
  {
    path: '',
    component: CortesParcialesPage
  }
];

@NgModule({
  entryComponents: [
    CorteParcialModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [CortesParcialesPage]
})
export class CortesParcialesPageModule {}
