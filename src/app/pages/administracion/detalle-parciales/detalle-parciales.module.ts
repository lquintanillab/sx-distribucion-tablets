import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleParcialesPage } from './detalle-parciales.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleParcialesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleParcialesPage]
})
export class DetalleParcialesPageModule {}
