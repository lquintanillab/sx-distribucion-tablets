import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SurtidoService } from '../../services/surtido.service';
import { IonSelect, ModalController } from '@ionic/angular';
import { MesaEmpaque } from '../../models/mesaEmpaque';


@Component({
  selector: 'app-empaque-modal',
  templateUrl: './empaque-modal.component.html',
  styleUrls: ['./empaque-modal.component.scss'],
})
export class EmpaqueModalComponent implements OnInit {

  @ViewChild(IonSelect) select: IonSelect;
  mesas;
  @Output() pass = new EventEmitter();
  mesa: MesaEmpaque;

  constructor(private surtidoService: SurtidoService,private modalCtrl: ModalController) { }

  ngOnInit() {
    this.mesas = this.surtidoService.mesas();
  }

  cancelar() {
    this.modalCtrl.dismiss(
    );
  }

  aceptar() {
    this.modalCtrl.dismiss(
      this.mesa
    );
  }

}
