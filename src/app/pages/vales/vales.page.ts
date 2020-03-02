import { Component, OnInit } from '@angular/core';
import { SurtidoService } from '../../services/surtido.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vales',
  templateUrl: './vales.page.html',
  styleUrls: ['./vales.page.scss'],
})
export class ValesPage implements OnInit {

  vales: any[] = [];

  loading = false;

  constructor(private surtidoService: SurtidoService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.load();
  }

  buscar(data) {
    this.vales = data;
  }

  load() {
    this.loading = true;
    this.surtidoService.documentos('vales').subscribe(data => {
      this.vales = data;
      this.loading = false;
    },
    error => {
      this.loading = false;
    });
  }

  iniciarSurtido(pass) {

    this.surtidoService.iniciarSurtido(pass.id, pass.nip, 'SOL').subscribe(data => {
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
    this.surtidoService.asignacionManual(manual.id, manual.nip, 'SOL', manual.empleadoId).subscribe(data => {
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
