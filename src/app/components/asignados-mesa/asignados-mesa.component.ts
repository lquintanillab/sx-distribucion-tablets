import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-asignados-mesa',
  templateUrl: './asignados-mesa.component.html',
  styleUrls: ['./asignados-mesa.component.scss'],
})
export class AsignadosMesaComponent implements OnInit {

  @Input() asignados;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  aceptar() {
    this.modalCtrl.dismiss();
  }

}
