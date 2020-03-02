import { Component, OnInit } from '@angular/core';
import { SurtidoService } from '../../services/surtido.service';
import { Surtido } from '../../models/surtido';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-entrega-local',
  templateUrl: './entrega-local.page.html',
  styleUrls: ['./entrega-local.page.scss'],
})
export class EntregaLocalPage implements OnInit {

  surtidos: Surtido[];
  loading = false;

  constructor(private surtidoService: SurtidoService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.surtidoService.entregaLocal().subscribe(data => {
      this.surtidos = data;
      this.loading = false;
    });
  }

  buscar(data) {
    this.surtidos = data;
 }

 atender(pass) {

    const surtido = pass.surtido;
    if (surtido.entregaLocal) {

      if (!surtido.cerrado) {
        this.surtidoService.atender(surtido, pass.nip, 'CERRAR').subscribe(data => {
          if (!data['message']) {
            this.presentToast(`Surtido Cerrado`);
            this.load();
          } else {
            this.presentToast(`${data['message']} `);
          }
        });
      }
      if (surtido.cerrado && !surtido.revisado) {
        this.surtidoService.atender(surtido, pass.nip, 'REVISAR').subscribe(data => {
          if (!data['message']) {
            this.presentToast(`Surtido Revisado`);
            this.load();
          } else {
            this.presentToast(`${data['message']} `);
          }
        });
      }
      if (surtido.cerrado && surtido.revisado) {
        this.surtidoService.atender(surtido, pass.nip, 'ENTREGAR').subscribe(data => {
          if (!data['message']) {
            this.presentToast(`Surtido Entregado`);
            this.load();
          } else {
            this.presentToast(`${data['message']} `);
          }
        });
      }
    }
 }

 async presentToast(mensaje) {
  console.log(mensaje);
  const toast = await this.toastCtrl.create({
    message: mensaje,
    duration: 2000,
    position: 'middle',
    cssClass: 'toast-asignacion',
  });
  toast.present();
}


}
