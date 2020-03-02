import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Surtido } from '../../../models/surtido';
import { ParcialesService } from '../../../services/parciales.service';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-surtido-det',
  templateUrl: './surtido-det.page.html',
  styleUrls: ['./surtido-det.page.scss'],
})
export class SurtidoDetPage implements OnInit {

  data: any;
  pdfSrc = 'assets/test.pdf';

  constructor(private route: ActivatedRoute, private router: Router, private parcialesService: ParcialesService,
              private document: DocumentViewer) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.surtido;
        console.log(this.data);
      }
    });
  }

  ngOnInit() {
  }

  print() {
    console.log('Surtido');
    console.log('Imprimiendo surtido', this.data.surtido.id);
    this.parcialesService.surtidoReport().subscribe();
    /*const options: DocumentViewerOptions = {
      title: 'My PDF'
    };*/
   // this.document.viewDocument('assets/test.pdf', 'application/pdf', options);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }


  goToBack() {
    this.router.navigate(['/parciales-tabs/entregas-parciales']);
  }

}
