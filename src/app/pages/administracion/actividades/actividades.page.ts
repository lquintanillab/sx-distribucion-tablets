import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurtidoService } from '../../../services/surtido.service';
import { ModalController, AlertController, IonItemSliding } from '@ionic/angular';
import { ActividadModalComponent } from '../../../components/actividad-modal/actividad-modal.component';
import { AdministracionService } from '../../../services/administracion.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  constructor(private router: Router, private surtidoService: SurtidoService, private modalCtrl: ModalController,
              private administracionService: AdministracionService, private storage: Storage,
              private alertCtrl: AlertController) {
      this.getUser();
  }

 pendientes ;
 nip;
 empleadoId;
 actividad;
 user: User;

  ngOnInit() {

  }


  load() {
    console.log('Loading data...');
    this.surtidoService.asignacionesPendientes().subscribe(
      data => {
        this.pendientes = data;
      }
    );
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToBack() {
    this.router.navigate(['/administracion']);
  }

  asignarActividad() {
    this.administracionService.asignarActividad(this.empleadoId, this.nip, this.actividad).subscribe(data => {
      this.load();
    });
  }

  terminarActividad(nip, id) {
    this.administracionService.terminarActividad(nip, id).subscribe(datos => {
      this.load();
    });
  }



  async presentModalAsignacion() {
    const modal = await this.modalCtrl.create({
       component: ActividadModalComponent ,
       componentProps: {
         tipo: 'plantilla'
      }
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.empleadoId = data.empleadoId;
      this.nip = data.nip;
      this.actividad = data.actividad;
      this.asignarActividad();
    }
  }

  async presentTerminarPrompt(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
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
          text: 'Terminar',
          cssClass: 'alert-surtido',
          handler: (data) => {
            this.terminarActividad(data.nip, id);
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


  async getUser() {
    this.user =  await this.storage.get('user');
  }

}
