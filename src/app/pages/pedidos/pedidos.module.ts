import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PedidosPage } from './pedidos.page';
import { ComponentsModule } from '../../components/components.module';
import { PopoverSurtidoComponent } from '../../components/popover-surtido/popover-surtido.component';

const routes: Routes = [
  {
    path: '',
    component: PedidosPage
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
  declarations: [PedidosPage]
})
export class PedidosPageModule {}
