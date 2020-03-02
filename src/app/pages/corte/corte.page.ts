import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertController, ToastController } from '@ionic/angular';
import { SurtidoService } from '../../services/surtido.service';
import { Corte } from '../../models/corte';

@Component({
  selector: 'app-corte',
  templateUrl: './corte.page.html',
  styleUrls: ['./corte.page.scss'],
})
export class CortePage implements OnInit {

  user;
  cortes: Corte[];

  constructor(private router: Router, private storage: Storage, private alertCtrl: AlertController,
              private surtidoService: SurtidoService, private toastCtrl: ToastController) {
      this.getUser();
   }

  ngOnInit() {

  }

  load() {
    this.surtidoService.corte(this.user.id).subscribe(data => {
      this.cortes = data;
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  async getUser() {
    this.user =  await this.storage.get('user');
    console.log('Usuario: ', this.user.nombre);
  }

  logout() {
    this.storage.clear();
    this.router.navigate(['/home']);
  }

  async presentAlertMesa() {
    const alert = await this.alertCtrl.create({
      header: 'Mesa de Empaque',
      message: '¿ Registrar mesa de empaque ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.crearMesa();
          }
        }
      ]
    });

    await alert.present();
  }

  crearMesa() {
    console.log('CreandoMesa');
    this.surtidoService.crearMesa(this.user.id).subscribe(
      data => {
        if (!data['message']) {
          this.presentToast(`Mesa de empaque creada`);
          //this.load();
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

  atenderCorte(corte) {
    if (!corte.inicio) {
        this.surtidoService.atenderCorte(corte.id, 'INICIAR', this.user.id).subscribe(data => {
          this.load();
        });
    }
    if (corte.inicio && !corte.fin) {
        this.surtidoService.atenderCorte(corte.id, 'TERMINAR', this.user.id).subscribe(data => {
          this.load();
        });
    }

  }



}
