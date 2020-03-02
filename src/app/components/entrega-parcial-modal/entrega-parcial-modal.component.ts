import { Component, OnInit } from '@angular/core';
import { AdministracionService } from '../../services/administracion.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-entrega-parcial-modal',
  templateUrl: './entrega-parcial-modal.component.html',
  styleUrls: ['./entrega-parcial-modal.component.scss'],
})
export class EntregaParcialModalComponent implements OnInit {

  parciales: any[] = [];
  parcialId: string = null;
  user;
  constructor(private administracionService: AdministracionService, private modalCtrl: ModalController, private storage: Storage) { }

  ngOnInit() {
    this.getUser();
  }


  buscar(event) {
    console.log(event.detail.value);

    this.administracionService.buscarVentaParcial(event.detail.value).subscribe(data => {
        this.parciales = data;
      });

  }

  async getUser() {
    this.user =  await this.storage.get('user');
    console.log('Usuario: ', this.user.nombre);
  }


  cancelar() {
    this.modalCtrl.dismiss();
  }

  aceptar() {
    this.modalCtrl.dismiss({
        parcialId: this.parcialId,
        user: this.user
    });
  }

  checked(check, id) {
      if (check.detail.checked) {
        this.parcialId = id;
      } else {
        this.parcialId = null;
      }

    }


}
