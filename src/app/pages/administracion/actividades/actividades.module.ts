import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActividadesPage } from './actividades.page';
import { ComponentsModule } from '../../../components/components.module';
import { ActividadModalComponent } from '../../../components/actividad-modal/actividad-modal.component';

const routes: Routes = [
  {
    path: '',
    component: ActividadesPage
  }
];

@NgModule({
  entryComponents: [ActividadModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [ActividadesPage]
})
export class ActividadesPageModule {}
