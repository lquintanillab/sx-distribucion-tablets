import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar, PopoverController } from '@ionic/angular';
import { PopoverSurtidoComponent } from '../popover-surtido/popover-surtido.component';
import { SurtidoService } from '../../services/surtido.service';
import { Surtido } from '../../models/surtido';



@Component({
  selector: 'app-header-surtido',
  templateUrl: './header-surtido.component.html',
  styleUrls: ['./header-surtido.component.scss'],
})
export class HeaderSurtidoComponent implements OnInit {

  @Input() title: string;
  @Output() searchResult = new EventEmitter();
  facturas: any[] = [];

  surtidos: Surtido[] = [];

  @ViewChild(IonSearchbar) searchBar: IonSearchbar;

  searchActive = false;
  constructor(private router: Router, private popoverCtrl: PopoverController, private surtidoService: SurtidoService) { }

  ngOnInit() {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  toogleSearch() {
      this.searchActive = !this.searchActive;
      if (this.searchActive) {
        setTimeout(() => {
          this.searchBar.setFocus();
        }, 500);
      } else {
       this.getAll();
      }
  }

  async presentPopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: PopoverSurtidoComponent,
      event: ev,
      mode: 'ios',
      backdropDismiss: true,
      translucent: true
    });

    await popover.present();
  }

  buscar(event) {
    if (event.detail.value) {
      const folio = event.detail.value;
      switch (this.title) {
        case 'Transformaciones':
        case 'Facturas':
        case 'Vales':
        case 'Pedidos':
            this.surtidoService.buscarDocumento(folio, this.title).subscribe(data => {
              this.facturas = data;
              this.searchResult.emit(this.facturas);
            });
            break;
        case 'Entrega Local':
        case 'Entrega Envio':
        case 'En Proceso':
          this.surtidoService.buscarSurtido(folio).subscribe(data => {
              this.surtidos = data;
              this.searchResult.emit(this.surtidos);
            });
          break;
        default:
          break;
      }
    } else {
      this.getAll();
    }
  }

  getAll() {
    console.log('titulo: ', this.title.toLowerCase());
    switch (this.title) {
      case 'Transformaciones':
      case 'Facturas':
      case 'Vales':
      case 'Pedidos':
          this.surtidoService.documentos( this.title.toLowerCase()).subscribe(data => {
            this.facturas = data;
            this.searchResult.emit(this.facturas);
        });
          break;
      case 'Entrega Local':
            this.surtidoService.entregaLocal().subscribe(data => {
              this.surtidos = data;
              this.searchResult.emit(this.surtidos);
          });
            break;
      case 'Entrega Envio':
          this.surtidoService.entregaEnvio().subscribe(data => {
            this.surtidos = data;
            this.searchResult.emit(this.surtidos);
        });
          break;
      case 'En Proceso':
          this.surtidoService.proceso().subscribe(data => {
            this.surtidos = data;
            this.searchResult.emit(this.surtidos);
          });
          break;
      default:
        break;
    }

  }

}
