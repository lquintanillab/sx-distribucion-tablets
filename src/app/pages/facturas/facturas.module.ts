import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FacturasPage } from './facturas.page';
import { ComponentsModule } from '../../components/components.module';
import { PopoverSurtidoComponent } from '../../components/popover-surtido/popover-surtido.component';

const routes: Routes = [
  {
    path: '',
    component: FacturasPage
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
  declarations: [FacturasPage]
})
export class FacturasPageModule {}
