import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministracionService } from '../../../services/administracion.service';
import { Corte } from '../../../models/corte';
import { ModalController } from '@ionic/angular';
import { CorteParcialModalComponent } from '../../../components/corte-parcial-modal/corte-parcial-modal.component';

@Component({
  selector: 'app-cortes-parciales',
  templateUrl: './cortes-parciales.page.html',
  styleUrls: ['./cortes-parciales.page.scss'],
})
export class CortesParcialesPage implements OnInit {

  cortes: Corte[] = [];
  isChecked = [];
  constructor(private router: Router, private administracionService: AdministracionService, private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  load() {
    console.log('Loading data...');
    this.administracionService.cortesParciales().subscribe(data => {
      this.cortes = data;
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToBack() {
    this.router.navigate(['/administracion']);
  }

  parcializarCorte(id, cortadores) {
    this.administracionService.parcializarCorte(id, cortadores).subscribe(data => {
      this.load();
    });
  }

  async presentModalAsignacion(id: string) {

    const modal = await this.modalCtrl.create({
       component: CorteParcialModalComponent ,
       componentProps: {
      }
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.parcializarCorte(id, data.cortadores);
    }
  }




}
