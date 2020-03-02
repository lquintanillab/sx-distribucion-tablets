import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {

  searchActive = false;
  @ViewChild(IonSearchbar) searchBar: IonSearchbar;
  constructor(private router: Router) { }

  ngOnInit() {
  }

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
       // this.getAll();
      }
  }

  buscar(event) {

  }

}
