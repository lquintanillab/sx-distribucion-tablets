import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Surtido } from '../../models/surtido';
import { SurtidoService } from '../../services/surtido.service';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-surtido-list',
  templateUrl: './surtido-list.component.html',
  styleUrls: ['./surtido-list.component.scss'],
})
export class SurtidoListComponent implements OnInit {

  @Input() surtidos: Surtido[];
  @Output() pass = new EventEmitter();

  constructor(private surtidoService: SurtidoService, private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  
  async presentAtencionPrompt(surtido: Surtido) {
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

            const asignacion = {
              nip: data.nip,
              surtido,
            };

            this.pass.emit(asignacion);
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
