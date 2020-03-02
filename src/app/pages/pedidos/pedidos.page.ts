import { Component, OnInit } from '@angular/core';
import { SurtidoService } from '../../services/surtido.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidos: any[] = [];

  loading = false;

  constructor(private surtidoService: SurtidoService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.load();
  }

  buscar(data) {
      this.pedidos = data;

  }
  load() {
    this.loading = true;
    this.surtidoService.documentos('pedidos').subscribe(data => {
      this.pedidos = data;
      this.loading = false;
    },
    error => {
      this.loading = false;
    });
  }

  iniciarSurtido(pass) {

    this.surtidoService.iniciarSurtido(pass.id, pass.nip, 'PST').subscribe(data => {
      if (!data['message']) {
        this.presentToast(`Asignado a: ${data['asignado'].nombre} `);
        this.load();
      } else {
        this.presentToast(`${data['message']} `);
      }

    });
  }

  asignacionManual(manual){
    console.log('------', manual);
    if (!manual.empleadoId && !manual.nip) {
       return;
    }
    this.surtidoService.asignacionManual(manual.id, manual.nip, 'PST', manual.empleadoId).subscribe(data => {
      if (!data['message']) {
        this.presentToast(`Asignado a: ${data['asignado'].nombre} `);
        this.load();
      } else {
        this.presentToast(`${data['message']} `);
      }

    });
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
