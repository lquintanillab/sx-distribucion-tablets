import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { SurtidoService } from '../../services/surtido.service';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-selector-empleado',
  templateUrl: './selector-empleado.component.html',
  styleUrls: ['./selector-empleado.component.scss'],
})
export class SelectorEmpleadoComponent implements OnInit {

  @Input() tipo: string;
  @ViewChild(IonSelect) select: IonSelect;
  @Output() empleado = new EventEmitter();
  empleados ;

  constructor(private surtidoService: SurtidoService) { }

  ngOnInit() {
    this.empleados = this.surtidoService.getEmpleados(this.tipo);
  }

  onChange() {
    console.log(this.select.value);
    this.empleado.emit(this.select.value);
  }

}
