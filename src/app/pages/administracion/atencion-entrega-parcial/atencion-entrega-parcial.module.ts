import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AtencionEntregaParcialPage } from './atencion-entrega-parcial.page';
import { MaterialModule } from '../../../material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { ComponentsModule } from '../../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AtencionEntregaParcialPage
  },
  {
    path: ':id',
    component: AtencionEntregaParcialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MatNativeDateModule,
    ComponentsModule
  ],
  declarations: [AtencionEntregaParcialPage],
  exports: [AtencionEntregaParcialPage],
  providers: [MatDatepickerModule]
})
export class AtencionEntregaParcialPageModule {}
