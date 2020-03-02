import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover-surtido',
  templateUrl: './popover-surtido.component.html',
  styleUrls: ['./popover-surtido.component.scss'],
})
export class PopoverSurtidoComponent implements OnInit {

  surtidoViews = [
    {
      icon: 'filing',
      name: 'Entrega Local',
      path: '/entrega-local'
    },
    {
      icon: 'train',
      name: 'Entrega Envio',
      path: '/entrega-envio'
    },
    {
      icon: 'cut',
      name: 'Entrega a Corte',
      path: '/entrega-corte'
    },
    {
      icon: 'logo-dropbox',
      name: 'Empaque',
      path: '/empaque'
    }
    ,
    {
      icon: 'document',
      name: 'Asignacion',
      path: '/home-tabs/facturas'
    }
    ,
    {
      icon: 'settings',
      name: 'En proceso',
      path: '/proceso'
    }
];

  constructor(private PopoverCtrl: PopoverController, private router: Router) { }

  ngOnInit() {}

  navegar(path) {
    this.router.navigate([path]);
    this.PopoverCtrl.dismiss();
  }

}
