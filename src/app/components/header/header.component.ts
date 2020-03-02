import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverSurtidoComponent } from '../popover-surtido/popover-surtido.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;


  constructor(private router: Router, private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  goToHome() {
    this.router.navigate(['/home']);
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

}
