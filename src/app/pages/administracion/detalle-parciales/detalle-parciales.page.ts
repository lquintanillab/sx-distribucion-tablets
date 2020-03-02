import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ParcialesService } from '../../../services/parciales.service';
import { Surtido } from '../../../models/surtido';

@Component({
  selector: 'app-detalle-parciales',
  templateUrl: './detalle-parciales.page.html',
  styleUrls: ['./detalle-parciales.page.scss'],
})
export class DetalleParcialesPage implements OnInit {

  entrega: any;

  surtidos: Surtido[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private parcialesService: ParcialesService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.entrega = this.router.getCurrentNavigation().extras.state.entrega;
        this.load(this.entrega.id);
      }
    });
   }

  ngOnInit() {
  }

  load( id ) {
      this.parcialesService.detalleEntrega(id).subscribe(datos => {
        console.log(datos);
        this.surtidos = datos;
      });
  }

  goToSurtido(surtido) {
    console.log('Surtido  ', surtido);
    const navigationExtras: NavigationExtras = {
      state: {
        surtido: { surtido }
      }
    };
    this.router.navigate(['surtido-det'], navigationExtras);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }


  goToBack() {
    this.router.navigate(['/parciales-tabs/entregas-parciales']);
  }


}
