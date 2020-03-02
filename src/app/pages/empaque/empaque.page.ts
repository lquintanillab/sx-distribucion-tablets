import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, ModalController, ToastController, AlertController, ActionSheetController } from '@ionic/angular';
import { PopoverSurtidoComponent } from '../../components/popover-surtido/popover-surtido.component';
import { MesaEmpaque } from '../../models/mesaEmpaque';
import { SurtidoService } from '../../services/surtido.service';
import { Corte } from '../../models/corte';
import { EmpaqueModalComponent } from '../../components/empaque-modal/empaque-modal.component';
import { load } from '@angular/core/src/render3';
import { AsignadosMesaComponent } from '../../components/asignados-mesa/asignados-mesa.component';

@Component({
  selector: 'app-empaque',
  templateUrl: './empaque.page.html',
  styleUrls: ['./empaque.page.scss'],
})
export class EmpaquePage implements OnInit {

  mesa: MesaEmpaque;
  cortes: Corte[] = [];
  isChecked: string[] = [];

  constructor(private router: Router, private popoverCtrl: PopoverController,
              private surtidoService: SurtidoService, private modalCtrl: ModalController,
              private toastCtrl: ToastController, private alertCtrl: AlertController,
              private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  load() {
    if ( this.mesa ) {
      this.isChecked = [];
      this.surtidoService.mesaEmpaque(this.mesa.cortador.id).subscribe(data => {
        this.cortes = data;
      });
     }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  async presentPopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: PopoverSurtidoComponent,
      event: ev,
      mode: 'ios',
      backdropDismiss: true,
      translucent: true
    });

    await popover.present();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
       component: EmpaqueModalComponent ,
       componentProps: {
      }
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.mesa = data;
    }
    this.load();
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

  asignarse() {
    if (this.mesa) {
        this.presentActionMesa();
    } else {
      this.presentToast('No hay mesa seleccionada');
    }
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

  async presentActionMesa() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: `Mesa de Empaque`,
      mode: 'ios',
      buttons: [
        {
          text: 'Asignarse',
          icon: '',
          handler: () => {
            this.presentAsignacionPrompt('ASIGNARSE');
          }
        },
        {
          text: 'Salir',
          icon: '',
          handler: () => {
            this.presentAsignacionPrompt('SALIR');
          }
        },
        {
          text: 'Asignaciones',
          icon: '',
          handler: () => {
            this.surtidoService.asignados(this.mesa.id).subscribe(
              data => { this.presentModalAsignados(data); }
            );
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async presentAsignacionPrompt(accion) {
    const prompt = await this.alertCtrl.create({
      header: `Asignarse a mesa de:  ${this.mesa.cortador.nombre}`,
      cssClass: 'alert-surtido',
      inputs: [
        {
          name: 'nip',
          type: 'password',
          placeholder: 'Nip',
        },
      ],
      buttons: [
        {
          text: accion === 'ASIGNARSE' ? 'Asignar' : 'Salir',
          cssClass: 'alert-surtido',
          handler: (data) => {
            if (accion === 'ASIGNARSE') {
              this.surtidoService.asignarAMesa(this.mesa.id, data.nip).subscribe(
                datos => {
                  if (!datos['message']) {
                    this.presentToast(`Asignado a mesa`);
                    // this.isChecked = [];
                    this.load();
                  } else {
                    this.presentToast(`${datos['message']} `);
                  }
                }
              );
            } else {
                this.surtidoService.salirDeMesa(this.mesa.id, data.nip).subscribe(
                  datos => {
                    if (!datos['message']) {
                      this.presentToast(`Saliste de la mesa`);
                      // this.isChecked = [];
                      this.load();
                    } else {
                      this.presentToast(`${datos['message']} `);
                    }
                  }
                );
            }
          }
        }
      ]
    });
    await prompt.present().then(() => {
      const firstInput: any = document.querySelector('ion-alert input');
      firstInput.focus();
      return;
    });
  }

  async presentModalAsignados(asignados) {
    const modal = await this.modalCtrl.create({
       component: AsignadosMesaComponent ,
       componentProps: {
         asignados
      }
    });
    await modal.present();
  }


  async presentAtencionPrompt(corteId) {
    const  adicionales = this.isChecked;
    const prompt = await this.alertCtrl.create({
      header: 'Digite su nip',
      cssClass: 'alert-surtido',
      inputs: [
        {
          name: 'nip',
          type: 'password',
          placeholder: 'Nip',
        },
      ],
      buttons: [
        {
          text: 'OK',
          cssClass: 'alert-surtido',
          handler: (data) => {
            this.surtidoService.terminarEmpaque(this.mesa.id, data.nip, corteId, adicionales).subscribe(
              datos => {
                if (!datos['message']) {
                  this.presentToast(`Empaque terminado`);
                  this.load();
                } else {
                  this.presentToast(`${datos['message']} `);
                }
              }
            );
          }
        }
      ]
    });
    await prompt.present().then(() => {
      const firstInput: any = document.querySelector('ion-alert input');
      firstInput.focus();
      return;
    });
  }

}
