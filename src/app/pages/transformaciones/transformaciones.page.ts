import { Component, OnInit } from '@angular/core';
import { SurtidoService } from '../../services/surtido.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-transformaciones',
  templateUrl: './transformaciones.page.html',
  styleUrls: ['./transformaciones.page.scss'],
})
export class TransformacionesPage implements OnInit {

  transformaciones: any[] = [];

  loading = false;

  constructor(private surtidoService: SurtidoService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.load();
  }

  buscar(data) {
    this.transformaciones = data;
  }

  load() {
    this.loading = true;
    this.surtidoService.documentos('transformaciones').subscribe(data => {
      this.transformaciones = data;
      this.loading = false;
    },
    error => {
      this.loading = false;
    });
  }

  iniciarSurtido(pass) {

    this.surtidoService.iniciarSurtido(pass.id, pass.nip, 'TRS').subscribe(data => {
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
    this.surtidoService.asignacionManual(manual.id, manual.nip, 'TRS', manual.empleadoId).subscribe(data => {
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
