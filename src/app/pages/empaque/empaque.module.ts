import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmpaquePage } from './empaque.page';
import { ComponentsModule } from '../../components/components.module';
import { EmpaqueModalComponent } from 'src/app/components/empaque-modal/empaque-modal.component';
import { AsignadosMesaComponent } from '../../components/asignados-mesa/asignados-mesa.component';

const routes: Routes = [
  {
    path: '',
    component: EmpaquePage
  }
];

@NgModule({
  entryComponents: [
    EmpaqueModalComponent,
    AsignadosMesaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [EmpaquePage]
})
export class EmpaquePageModule {}
