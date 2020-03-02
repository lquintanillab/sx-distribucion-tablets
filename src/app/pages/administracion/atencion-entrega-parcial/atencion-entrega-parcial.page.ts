import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AdministracionService } from '../../../services/administracion.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { ParcialesService } from '../../../services/parciales.service';
import { Surtido } from '../../../models/surtido';

@Component({
  selector: 'app-atencion-entrega-parcial',
  templateUrl: './atencion-entrega-parcial.page.html',
  styleUrls: ['./atencion-entrega-parcial.page.scss'],
})
export class AtencionEntregaParcialPage implements OnInit {
  id;
  entrega$: Observable<EntregaParcial>;
  partidas: EntregaParcialDet[] = [];
  user;
  empleado;
  constructor(private route: ActivatedRoute, private router: Router, private administracionService: AdministracionService,
              private storage: Storage, private toastCtrl: ToastController, private service: ParcialesService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.entrega$ = this.administracionService.getEntrega(this.id);
    this.getUser();

  }

  onSave( data ) {
    if (this.empleado && this.user) {

      this.service.asignarParcial(data, this.user.id, this.empleado).subscribe( (datos) => {
        console.log(datos);
        this.goToSurtido(datos);
      });
    } else {
        this.presentToast('Seleccione un empleado');
    }
  }

  async getUser() {
    this.user =  await this.storage.get('user');
  }

  asignarEmpleado(event) {
      console.log('Asignando empleado', event );
      this.empleado  = event;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }


  goToBack() {
    this.router.navigate(['/parciales-tabs/entregas-parciales']);
  }

  goToSurtido(surtido) {
    const navigationExtras: NavigationExtras = {
      state: {
        surtido
      }
    };
    this.router.navigate(['surtido-det'], navigationExtras);
  }

  async presentToast(mensaje) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }



}
