import { Component, OnInit } from '@angular/core';
import { SurtidoService } from '../../services/surtido.service';
import { Surtido } from '../../models/surtido';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.page.html',
  styleUrls: ['./proceso.page.scss'],
})
export class ProcesoPage implements OnInit {

  surtidos: Surtido[];

  constructor(private surtidoService: SurtidoService) { }

  ngOnInit() {
    this.load();
  }

  load() {
      this.surtidoService.proceso().subscribe(data => {
        console.log(data);
        this.surtidos = data;
      });
  }

  buscar(data) {
      this.surtidos = data;
  }

}
