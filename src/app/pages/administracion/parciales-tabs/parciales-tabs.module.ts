import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParcialesTabsPage } from './parciales-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: ParcialesTabsPage,
    children: [
      {
        path: 'cortes-parciales',
        loadChildren: '../cortes-parciales/cortes-parciales.module#CortesParcialesPageModule' },
      {
        path: 'entregas-parciales',
        loadChildren: '../entregas-parciales/entregas-parciales.module#EntregasParcialesPageModule' },
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
  declarations: [ParcialesTabsPage]
})
export class ParcialesTabsPageModule {}
