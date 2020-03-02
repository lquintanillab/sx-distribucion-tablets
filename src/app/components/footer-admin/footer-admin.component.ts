import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-footer-admin',
  templateUrl: './footer-admin.component.html',
  styleUrls: ['./footer-admin.component.scss'],
})
export class FooterAdminComponent implements OnInit {

@Input() user;

  constructor(private storage: Storage, private router: Router) {
  }

 ngOnInit() {
 }


  logout() {
    this.storage.clear();
    this.router.navigate(['/home']);
  }

}
