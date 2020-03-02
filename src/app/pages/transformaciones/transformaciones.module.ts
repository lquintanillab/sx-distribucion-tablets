import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TransformacionesPage } from './transformaciones.page';
import { ComponentsModule } from '../../components/components.module';
import { PopoverSurtidoComponent } from '../../components/popover-surtido/popover-surtido.component';

const routes: Routes = [
  {
    path: '',
    component: TransformacionesPage
  }
];

@NgModule({
  entryComponents: [
    PopoverSurtidoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [TransformacionesPage]
})
export class TransformacionesPageModule {}
