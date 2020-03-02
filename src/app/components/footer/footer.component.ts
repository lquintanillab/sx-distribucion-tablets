import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  segmento: string;

  @ViewChild(IonSegment) segment: IonSegment;

  surtidoViews = [
    {
      icon: 'cart',
      name: 'facturas',
      path: '/facturas'
    },
    {
      icon: 'basket',
      name: 'pedidos',
      path: '/pedidos'
    },
    {
      icon: 'swap',
      name: 'vales',
      path: '/vales'
    },
    {
      icon: 'color-wand',
      name: 'transformaciones',
      path: '/transformaciones'
    }
];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  navegar(path) {
    this.router.navigate([path]);

    console.log(this.route.snapshot);
  
  }

}
