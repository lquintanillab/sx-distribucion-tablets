import { Component, OnInit, Input } from '@angular/core';
import { SurtidoService } from '../../services/surtido.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-asignacion-document-modal',
  templateUrl: './asignacion-document-modal.component.html',
  styleUrls: ['./asignacion-document-modal.component.scss'],
})
export class AsignacionDocumentModalComponent implements OnInit {

  @Input() id;
  @Input() tipo;
  operacion$: Observable<any>;
  nip = '';

  constructor(private surtidoService: SurtidoService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.loadOperacion();
  }

  loadOperacion() {
    this.operacion$ = this.surtidoService.getOperacion(this.id, this.tipo);
  }

cancelar() {
  this.modalCtrl.dismiss();
}
 asignar() {
  this.modalCtrl.dismiss({
      nip: this.nip
  });
 }


}
