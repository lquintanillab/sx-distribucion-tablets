import { Component, OnInit } from '@angular/core';
import { SurtidoService } from '../../services/surtido.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-corte-parcial-modal',
  templateUrl: './corte-parcial-modal.component.html',
  styleUrls: ['./corte-parcial-modal.component.scss'],
})
export class CorteParcialModalComponent implements OnInit {

  cortadores: User[] = [];

  isChecked: number[] = [];

  constructor(private surtidoService: SurtidoService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.load();
  }


  load() {
    this.surtidoService.getEmpleados('cortadores').subscribe(data => {
      this.cortadores = data;
    });
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }

  aceptar() {
    this.modalCtrl.dismiss({
       cortadores: this.isChecked
    });
  }

  checked(check, id) {
    if (check.detail.checked) {
      if (!this.isChecked.find(x => x === id)) {
        this.isChecked.push( id );
      }
    } else {
      if (this.isChecked.find(x => x === id)) {
        const ind = this.isChecked.indexOf(id);
        this.isChecked.splice(ind, 1);
      }
    }
}


}
