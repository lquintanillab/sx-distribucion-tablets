import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastController, AlertController, ModalController, IonItemSliding } from '@ionic/angular';
import { AsignacionModalComponent } from '../asignacion-modal/asignacion-modal.component';
import { AsignacionDocumentModalComponent } from '../asignacion-document-modal/asignacion-document-modal.component';

@Component({
  selector: 'app-asignacion-list',
  templateUrl: './asignacion-list.component.html',
  styleUrls: ['./asignacion-list.component.scss'],
})
export class AsignacionListComponent implements OnInit {

  asignacion = {
    nip: '',
    id: ''
  };

  @Input() documentos: any[];
  @Input() tipo;
  @Output() pass = new EventEmitter();
  @Output() manual = new EventEmitter();





  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController, private modalCtrl: ModalController) { }

  ngOnInit() {}

  async presentToast(mensaje) {
    console.log(mensaje);
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async presentAsignacionPrompt(id: string) {
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
          text: 'Asignar',
          cssClass: 'alert-surtido',
          handler: (data) => {
            this.asignacion.nip = data.nip;
            this.asignacion.id = id;
            this.pass.emit(this.asignacion);
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

  async presentAsignacionManualPrompt(id: string) {

    const prompt = await this.alertCtrl.create({
      header: 'Nip de Supervisor:'
    });

    await prompt.present();
  }


  async presentModalAsignacion(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    const modal = await this.modalCtrl.create({
       component: AsignacionModalComponent ,
       componentProps: {
         tipo: 'plantilla'
      }
    });

    await modal.present();
    let { data } = await modal.onDidDismiss();
    data = {...data, id};
    this.manual.emit(data);
  }

  async presentModalDocument(id, tipo) {
    const modal = await this.modalCtrl.create({
      component: AsignacionDocumentModalComponent,
      componentProps: {
          id,
          tipo
      }
    });
    if (tipo === 'FACS') {
      await modal.present();
      const { data } = await modal.onDidDismiss();
      if (data) {
        this.asignacion.nip = data.nip;
        this.asignacion.id = id;
        this.pass.emit(this.asignacion);
      }
    }
  }

}
