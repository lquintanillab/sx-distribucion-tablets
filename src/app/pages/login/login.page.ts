import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonInput) ionInput: IonInput;

  goTo = '/home';

  constructor(private authService: AuthService , private storage: Storage, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.goTo = this.router.getCurrentNavigation().extras.state.url;
    }

  }

  ngOnInit() {
   // this.ionViewLoaded();
  }

  ionViewLoaded() {
    setTimeout(() => {
       this.ionInput.setFocus();
    }, 150);

 }

    login(form) {
    const nip = form.value.nip;
    this.authService.login(nip).subscribe( data => {
          this.setUser(data);
          this.router.navigate([this.goTo]);
        });
  }

  async setUser(data) {
    await this.storage.set('user', data);
  }


  cancelar() {
    this.router.navigate(['/home']);
  }

}
