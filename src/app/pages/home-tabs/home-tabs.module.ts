import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeTabsPage } from './home-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTabsPage,
    children: [
      {
        path: 'facturas',
        loadChildren: '../facturas/facturas.module#FacturasPageModule'
      },
      {
        path: 'pedidos',
        loadChildren: '../pedidos/pedidos.module#PedidosPageModule'
      },
      {
        path: 'vales',
        loadChildren: '../vales/vales.module#ValesPageModule'
      },
      {
        path: 'transformaciones',
        loadChildren: '../transformaciones/transformaciones.module#TransformacionesPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeTabsPage]
})
export class HomeTabsPageModule {}
