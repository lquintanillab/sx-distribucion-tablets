import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntregasParcialesPage } from './entregas-parciales.page';
import { ComponentsModule } from '../../../components/components.module';
import { EntregaParcialModalComponent } from '../../../components/entrega-parcial-modal/entrega-parcial-modal.component';

const routes: Routes = [
  {
    path: '',
    component: EntregasParcialesPage
  },
];

@NgModule({
  entryComponents: [
    EntregaParcialModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
  ],
  declarations: [EntregasParcialesPage]
})
export class EntregasParcialesPageModule {}
