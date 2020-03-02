import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Corte } from '../../models/corte';
import { ModalController, IonCheckbox } from '@ionic/angular';
import { AsignacionModalComponent } from '../asignacion-modal/asignacion-modal.component';

@Component({
  selector: 'app-corte-list',
  templateUrl: './corte-list.component.html',
  styleUrls: ['./corte-list.component.scss'],
})
export class CorteListComponent implements OnInit {

  @Input() cortes: Corte[];
  @Output() ent = new EventEmitter();

  isChecked: string[] = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async presentModalAsignacion(id: string) {

    console.log(`Seleccion principal: ${id} adicionales ${this.isChecked} `);
    const adicionales = this.isChecked;
    const modal = await this.modalCtrl.create({
       component: AsignacionModalComponent ,
       componentProps: {
         tipo: 'cortadores'
      }
    });
    await modal.present();
    let { data } = await modal.onDidDismiss();
    data = {...data, id, adicionales };
    this.ent.emit(data);

  }

  checked(check, id: string) {
      console.log('id: ', id);
      console.log('check', check.detail.checked);
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
      console.log(this.isChecked);
  }

}
