import { Component, OnInit } from '@angular/core';
import { Corte } from '../../models/corte';
import { SurtidoService } from '../../services/surtido.service';
import { ToastController, ModalController } from '@ionic/angular';
import { AsignacionModalComponent } from '../../components/asignacion-modal/asignacion-modal.component';

@Component({
  selector: 'app-entrega-corte',
  templateUrl: './entrega-corte.page.html',
  styleUrls: ['./entrega-corte.page.scss'],
})
export class EntregaCortePage implements OnInit {

  cortes: Corte[];
  loading = false;

  isChecked: string[] = [];

  constructor(private surtidoService: SurtidoService, private toastCtrl: ToastController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.surtidoService.entregaCorte().subscribe(data => {
      this.cortes = data;
      this.loading = false;
    });
  }

  buscar(data) {
    this.cortes = data;
 }

  atender(pass) {
    if (!pass.empleadoId && !pass.nip) {
      return;
    }
    this.surtidoService.entregarParaCorte(pass.id, pass.nip, pass.empleadoId, pass.adicionales ).subscribe(
      data =>{
        if (!data['message']) {
          this.presentToast(`Entregado para cortar`);
          this.isChecked = [];
          this.load();
        } else {
          this.presentToast(`${data['message']} `);
        }
      }
    );
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

  async presentModalAsignacion(id: string) {
    const adicionales = this.isChecked;
    const modal = await this.modalCtrl.create({
       component: AsignacionModalComponent ,
       componentProps: {
         tipo: 'cortadores'
      }
    });
    await modal.present();
    let { data } = await modal.onDidDismiss();
    data = {...data, id, adicionales };
    this.atender(data);

  }

  checked(check, id: string) {
      if (check.detail.checked) {
        if (!this.isChecked.find(x => x === id)) {
          this.isChecked.push(id);
        }
      } else {
        if (this.isChecked.find(x => x === id)) {
          const ind = this.isChecked.indexOf(id);
          this.isChecked.splice(ind, 1);
        }
      }
  }


}
