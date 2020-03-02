import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AdministracionGuard  implements CanActivate  {
    // route: ActivatedRouteSnapshot;
  // state: RouterStateSnapshot;

  user;
  hasRole: boolean;
  loggedIn: boolean;

  constructor(private storage: Storage, private router: Router) {

  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
    await this.storage.get('user').then((val) => {
      if (val) {
        this.user =  val;
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
    if (this.loggedIn) {
      this.hasRole = this.user.roles.includes('ROLE_GERENTE');
      if ( this.hasRole ) {
          return true;
        } else {
          this.router.navigate(['/login'], {state: {url: state.url}});
          return false;
      }
    }
    this.router.navigate(['/login'], {state: { url: state.url}});
    return false;
  }
}
