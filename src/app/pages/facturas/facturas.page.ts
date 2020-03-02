import { Component, OnInit, OnDestroy } from '@angular/core';
import { SurtidoService } from '../../services/surtido.service';
import { ToastController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.page.html',
  styleUrls: ['./facturas.page.scss'],
})
export class FacturasPage implements OnInit {

  facturas: any = [];

  loading = false;

  timeoutId;

  constructor(private surtidoService: SurtidoService, private toastCtrl: ToastController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
   this.load();
  }

  buscar(data) {
    this.facturas = data;
  }

  ionViewDidEnter() {
   // this.initRefresh();
  }

  ionViewDidLeave() {
   // console.log('Abandonando la pagina');
   // this.stopRefresh();
  }

  initRefresh() {
    this.timeoutId =  setInterval(() => {
      console.log('Refreshing ...');
      this.load();
    }, 5 * 1000);
  }

  stopRefresh() {
    console.log('Stopping ...');
    clearInterval(this.timeoutId);
  }

  load() {
    this.loading = true;
    this.surtidoService.documentos('facturas').subscribe(data => {
      this.facturas = data;
      this.loading = false;
    },
    error => {
      this.loading = false;
    });
  }

  iniciarSurtido(pass) {

    this.surtidoService.iniciarSurtido(pass.id, pass.nip, 'FAC').subscribe(data => {
      if (!data['message']) {
        this.presentToast(`Asignado a: ${data['asignado'].nombre} `);
        this.load();
      } else {
        this.presentToast(`${data['message']} `);
      }

    });
  }

  asignacionManual(manual){
    if (!manual.empleadoId && !manual.nip) {
      return;
    }
    this.surtidoService.asignacionManual(manual.id, manual.nip, 'FAC', manual.empleadoId).subscribe(data => {
      if (!data['message']) {
        this.presentToast(`Asignado a: ${data['asignado'].nombre} `);
        this.load();
      } else {
        this.presentToast(`${data['message']} `);
      }

    });
  }

  async presentToast(mensaje) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'middle',
      cssClass: 'toast-asignacion',
    });
    toast.present();
  }

}
