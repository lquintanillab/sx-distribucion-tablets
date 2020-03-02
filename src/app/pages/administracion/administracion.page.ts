import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {
  user;
  constructor(private storage: Storage, private router: Router) {
    this.getUser();
   }

  ngOnInit() {
  }

  async getUser() {
    this.user =  await this.storage.get('user');
    console.log('Usuario: ', this.user.nombre);
  }



  logout() {
    this.storage.clear();
    this.router.navigate(['/home']);
  }

  goTo(ruta: string) {
      this.router.navigate([`/${ruta}`]);
  }

}
