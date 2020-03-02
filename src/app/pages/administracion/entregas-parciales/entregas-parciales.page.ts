import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EntregaParcialModalComponent } from '../../../components/entrega-parcial-modal/entrega-parcial-modal.component';
import { AdministracionService } from '../../../services/administracion.service';
import { AtencionEntregaParcialPage } from '../atencion-entrega-parcial/atencion-entrega-parcial.page';

@Component({
  selector: 'app-entregas-parciales',
  templateUrl: './entregas-parciales.page.html',
  styleUrls: ['./entregas-parciales.page.scss'],
})
export class EntregasParcialesPage implements OnInit {

  entregas: EntregaParcial[] = [];

  constructor(private router: Router, private modalCtrl: ModalController, private administracionService: AdministracionService) { }

  ngOnInit() {

  }

  load() {
      this.administracionService.entregasParciales().subscribe( data => {
        console.log(data);
        this.entregas = data;
      });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }


  goToBack() {
    this.router.navigate(['/administracion']);
  }

  iniciarParcial(parcialId, userId) {
    this.administracionService.iniciarEntregaParcial(parcialId, userId).subscribe( data => {
      console.log(data);
    });
  }

  onEdit(id) {
    console.log('Editing a entrega');

    this.router.navigate(['/atencion-entrega-parcial', {id}]);
  }

  mostrarDetalle(entrega) {
    const navigationExtras: NavigationExtras = {
      state: {
        entrega
      }
    };
    this.router.navigate(['detalle-parciales'], navigationExtras);
  }

   async presentModalParcial() {
    const modal = await this.modalCtrl.create({
       component:  EntregaParcialModalComponent,
       componentProps: {
      }
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log('********', data);
      this.iniciarParcial(data.parcialId, data.user.id);
    }
  }

}
