import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-actividad-modal',
  templateUrl: './actividad-modal.component.html',
  styleUrls: ['./actividad-modal.component.scss'],
})
export class ActividadModalComponent implements OnInit {

  empleadoId;
  nip = '';

  @ViewChild(IonSelect) select: IonSelect;

  actividades = ['DESCARGA', 'SECTOR', 'BARRER', 'SALIDA SUCURSAL'];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  asignarEmpleado(empleado) {
    this.empleadoId = empleado;
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }

  aceptar() {
    this.modalCtrl.dismiss({
      empleadoId: this.empleadoId,
      nip: this.nip,
      actividad: this.select.value
    });
  }

}
