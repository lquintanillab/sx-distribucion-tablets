import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-asignacion-modal',
  templateUrl: './asignacion-modal.component.html',
  styleUrls: ['./asignacion-modal.component.scss'],
})
export class AsignacionModalComponent implements OnInit {

  @Input()id: string;
  @Input()tipo: string;
  empleadoId;
  nip = '';


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  asignarEmpleado(empleado) {
    this.empleadoId = empleado;
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }

  aceptar() {
    this.modalCtrl.dismiss({
      empleadoId: this.empleadoId,
      nip: this.nip
    });
  }



}
