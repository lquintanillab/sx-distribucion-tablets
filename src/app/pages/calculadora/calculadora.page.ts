
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements AfterViewInit, OnInit {

    /** Template reference to the canvas element */
    @ViewChild('canvasEl') canvasEl: ElementRef;
    /** Canvas 2d context */
    private context: CanvasRenderingContext2D;
    // Ancho es el lado corto y el largo es el lado grande
    corteLargo = 0.00;
    corteAncho = 0.00;
    papelAncho = 0.00;
    papelLargo = 0.00;
    cortesDeseados = 0.00;
    orientacion = 'Horizontal';
    areaUtilizada;
    areaInutilizada;

    cortes = {
      cortesT: 0.00,
      cortesV: 0.00,
      cortesH: 0.00,
      sobranteV: 0.00,
      sobranteH: 0.00,
      areaUtilizada: 0.00
    };

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {

      this.corteLargo = 16;
      this.corteAncho = 8;
      this.papelLargo = 95;
      this.papelAncho = 70;
      this.cortesDeseados = 1200;

    }

    ngAfterViewInit() {
      this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
      const ancho = 600;
      this.renderer.setAttribute(this.canvasEl.nativeElement, 'width', ancho.toString());
      this.renderer.setAttribute(this.canvasEl.nativeElement, 'height', ancho.toString());
    }

    calcularVertical() {

        this.orientacion = 'Vertical';
        const v = Math.max(this.papelAncho, this.papelLargo);
        const h = Math.min(this.papelAncho, this.papelLargo);
        const cb = this.corteAncho;
        const ch = this.corteLargo;
        // const escala = 250 / v;
        const escala = 500 / v;
        let cortes, sobrante;
        let totalCortes = 0.00;
        let cortesV, cortesH = 0.00;

        this.clearCanvas();

        this.renderer.setAttribute(this.canvasEl.nativeElement, 'width', (h * escala).toString());
        this.renderer.setAttribute(this.canvasEl.nativeElement, 'height', (v * escala).toString());
        this.renderer.setStyle(this.canvasEl.nativeElement, 'background-color', '#fff');
        cortes = this.acomoda(v, h, 'N', 'V');
        totalCortes = cortes.cortesT;

        this.dibujaCuadricula(cortes.cortesV, cortes.cortesH, cb, ch, 0, 0, escala, '');

        if (cortes.sobranteV >= ch) {
                sobrante = this.acomoda(cortes.sobranteV, v, 'H', 'H');
                totalCortes += sobrante.cortesT;
                this.dibujaCuadricula(sobrante.cortesH, sobrante.cortesV, ch, cb, cortes.cortesV * cb * escala, 0, escala, 'R');
        } else if (cortes.sobranteH >= cb) {
                sobrante = this.acomoda(cortes.sobranteH, h, 'H', 'H');
                totalCortes += sobrante.cortesT;
                this.dibujaCuadricula(sobrante.cortesV, sobrante.cortesH, ch, cb, 0, cortes.cortesH * ch * escala, escala, 'R');
        } else {
            sobrante = {
                cortesT: 0,
                cortesV: 0,
                cortesH: 0,
                sobranteV: 0,
                sobranteH: 0,
                areaUtilizada: 0
            };
        }
        if (Math.floor(cb) < Math.floor(ch)) {
            cortesV = cortes.cortesT;
            cortesH = sobrante.cortesT;
        } else {
            cortesV = sobrante.cortesT;
            cortesH = cortes.cortesT;
        }

        this.calcularArea(v, h, cb, ch, totalCortes);
        this.calcular(v, h, cortesV, cortesH, totalCortes, cortes.cortesT, 'V');

    }

    calcularHorizontal() {
        this.orientacion = 'Horizontal';
        const v = Math.max(this.papelAncho, this.papelLargo);
        const h = Math.min(this.papelAncho, this.papelLargo);
        const cb = this.corteAncho;
        const ch = this.corteLargo;
        const escala = 500 / v;
        let cortes, sobrante;
        let totalCortes = 0.00;
        let cortesV, cortesH = 0.00;

        this.clearCanvas();

        this.renderer.setAttribute(this.canvasEl.nativeElement, 'width', (v * escala).toString());
        this.renderer.setAttribute(this.canvasEl.nativeElement, 'height', (h * escala).toString());
        this.renderer.setStyle(this.canvasEl.nativeElement, 'background-color', '#fff');

        cortes = this.acomoda(v, h, 'N', 'H');
        totalCortes = cortes.cortesT;

        this.dibujaCuadricula(cortes.cortesV, cortes.cortesH, cb, ch, 0, 0, escala, '');

        if (cortes.sobranteV >= ch) {
            sobrante = this.acomoda(cortes.sobranteV, h, 'H', 'H');
            totalCortes += sobrante.cortesT;
            this.dibujaCuadricula(sobrante.cortesH, sobrante.cortesV, ch, cb, cortes.cortesV * cb * escala, 0, escala, 'R');
        } else if (cortes.sobranteH >= cb) {
            sobrante = this.acomoda(cortes.sobranteH, v, 'H', 'H');
            totalCortes += sobrante.cortesT;
            this.dibujaCuadricula(sobrante.cortesV, sobrante.cortesH, ch, cb, 0, cortes.cortesH * ch * escala, escala, 'R');
        } else {
            sobrante = {
                cortesT: 0,
                cortesv: 0,
                cortesH: 0,
                sobrantev: 0,
                sobranteH: 0,
                areaUtilizada: 0
            };
        }

        if (Math.floor(cb) < Math.floor(ch)) {
            cortesV = cortes.cortesT;
            cortesH = sobrante.cortesT;
        } else {
            cortesV = sobrante.cortesT;
            cortesH = cortes.cortesT;
        }

        this.calcularArea(v, h, cb, ch, totalCortes);
        this.calcular(v, h, cortesV, cortesH, totalCortes, cortes.cortesT, 'H');

    }

    calcularMaximo() {
      this.orientacion = 'Maximo';
      const v = Math.max(this.papelAncho, this.papelLargo);
      const h = Math.min(this.papelAncho, this.papelLargo);
      const cb = Math.max(this.corteAncho, this.corteLargo);
      const ch = Math.min(this.corteAncho, this.corteLargo);
      const escala = 500 / v;
      let a1h = h;
      let a1b = v;
      let a2h, a2b, sumaCortes = 0;
      let corteA1, corteA2;
      let totalCortes;
      let acomodo1, acomodo2 ;

      this.clearCanvas();

      this.renderer.setAttribute(this.canvasEl.nativeElement, 'width', (v * escala).toString());
      this.renderer.setAttribute(this.canvasEl.nativeElement, 'height', (h * escala).toString());
      this.renderer.setStyle(this.canvasEl.nativeElement, 'background-color', '#fff');

      /* Primero se acomoda el papel en H */
      const cortes = this.acomoda(v, h, 'H', 'M');

      totalCortes = cortes.cortesT;
      acomodo1 = {
          a1b: v,
          a2b: v,
          a1h: h,
          a2h: 0,
          sumaCortes: totalCortes,
          cortesH1: cortes.cortesH,
          cortesB1: cortes.cortesV,
          cortesT1: cortes.cortesT,
          cortesH2: 0,
          cortesB2: 0,
          cortesT2: 0
      };

      for (let x = 0; x <= cortes.cortesH; x++) {
          a2b = v;

          a2h = ((ch * x) + cortes.sobranteH);
          a1h = (h - a2h);

          corteA1 = this.acomoda(a1b, a1h, 'H', 'N');
          corteA2 = this.acomoda(a2b, a2h, 'V', 'N');

          sumaCortes = corteA1.cortesT + corteA2.cortesT;
          if ( sumaCortes > totalCortes ) {
              totalCortes = sumaCortes;
              acomodo1 = {
                  a1b,
                  a2b,
                  a1h,
                  a2h,
                  sumaCortes: totalCortes,
                  cortesH1: corteA1.cortesH,
                  cortesB1: corteA1.cortesV,
                  cortesT1: corteA1.cortesT,
                  cortesH2: corteA2.cortesH,
                  cortesB2: corteA2.cortesV,
                  cortesT2: corteA2.cortesT
              };
          }
      }

      totalCortes = cortes.cortesT;
      acomodo2 = {a1b: v, a2b: 0, a1h: h, a2h: h, sumaCortes: totalCortes, cortesH: totalCortes, cortesV: 0.00};

      for (let x = 0; x <= cortes.cortesV; x++) {
          a1h = h;

          a2b = ((cb * x) + cortes.sobranteV);
          a1b = (v - a2b);

          corteA1 = this.acomoda(a1b, a1h, 'H', 'N');
          corteA2 = this.acomoda(a2b, a2h, 'V', 'N');

          sumaCortes = corteA1.cortesT + corteA2.cortesT;

          if ( sumaCortes > totalCortes ) {
              totalCortes = sumaCortes;
              acomodo2 = {
                  a1b,
                  a2b,
                  a1h,
                  a2h,
                  sumaCortes: totalCortes,
                  cortesH1: corteA1.cortesH,
                  cortesB1: corteA1.cortesV,
                  cortesT1: corteA1.cortesT,
                  cortesH2: corteA2.cortesH,
                  cortesB2: corteA2.cortesV,
                  cortesT2: corteA2.cortesT
              };
          }
      }

      if ( acomodo2.sumaCortes > acomodo1.sumaCortes ) {
        this.calcularArea(v, h, cb, ch, acomodo2.sumaCortes);
        this.calcular(v, h, acomodo2.cortesT2, acomodo2.cortesT1, Math.floor(acomodo2.sumaCortes), acomodo2.sumaCortes, 'M');
        // Dibuja 2 areas una al lado de otra
        this.dibujaCuadricula(acomodo2.cortesB1, acomodo2.cortesH1, cb, ch, 0, 0, escala, '');
        this.dibujaCuadricula(acomodo2.cortesB2, acomodo2.cortesH2, ch, cb, acomodo2.cortesB1 * cb * escala, 0, escala, '');
      } else {
        this.calcularArea(v, h, cb, ch, acomodo1.sumaCortes);
        this.calcular(v, h, acomodo1.cortesT2, acomodo1.cortesT1, acomodo1.sumaCortes, Math.floor(acomodo1.sumaCortes), 'M');
        // Dibuja 2 areas una arriba de otraa
        this.dibujaCuadricula(acomodo1.cortesB1, acomodo1.cortesH1, cb, ch, 0, 0, escala, '');
        this.dibujaCuadricula(acomodo1.cortesB2, acomodo1.cortesH2, ch, cb, 0, acomodo1.cortesH1 * ch * escala, escala, '');
      }
    }

    acomoda(d1, d2, acomodoCorte, acomodoPliego) {
      /*
       * corte_ancoho y corte_largo siempre son constantes
       */
      const corteAncho = this.corteAncho;
      const corteLargo = this.corteLargo;
      let  cv = 1;
      let ch = 1;
      let v = 1;
      let h = 1;

      if (acomodoPliego === 'V') {
          v = Math.min(d1, d2);
          h = Math.max(d1, d2);
      } else if (acomodoPliego === 'H') {
      /* Acomodo del pliego en horizontal y para el calculo del maximo
       */
          v = Math.max(d1, d2);
          h = Math.min(d1, d2);
      } else {
          v = d1;
          h = d2;
      }

      if (acomodoCorte === 'H') {
          cv = Math.max(corteAncho, corteLargo);
          ch = Math.min(corteAncho, corteLargo);
      } else if (acomodoCorte === 'V') {
          cv = Math.min(corteAncho, corteLargo);
          ch = Math.max(corteAncho, corteLargo);
      } else {
          cv = corteAncho;
          ch = corteLargo;
      }

      const cortesT = Math.floor(v / cv) * Math.floor(h / ch);
      const cortesV = Math.floor(v / cv);
      const cortesH = Math.floor(h / ch);
      const sobranteV = (v - (cortesV * cv));
      const sobranteH = (h - (cortesH * ch));
      const areaUtilizada = ((cv * ch) * (Math.floor(v / cv) * Math.floor(h / ch)));

      this.cortes = {
            cortesT,
            cortesV,
            cortesH,
            sobranteV,
            sobranteH,
            areaUtilizada
        };
      return this.cortes;
    }

  calcularArea(anchoPapel, largoPapel, anchoCorte, largoCorte, cortesEnPliego) {
    const areaPapel = anchoPapel * largoPapel;
    const areaCorte = anchoCorte * largoCorte;
    const areaUtilizadaCortes = cortesEnPliego * areaCorte;
    const porcentajeAreaUtilizada = ((areaUtilizadaCortes * 100) / areaPapel);
    const porcentajeAreaInutilizada = (100 - porcentajeAreaUtilizada);
    this.areaUtilizada = porcentajeAreaUtilizada;
    this.areaInutilizada = porcentajeAreaInutilizada;

    console.log('Area Utilizada', this.areaUtilizada);
    console.log('Area Inutilizada', this.areaInutilizada);

  }

  imprimirResultados(cortesPliego, pliegos, cortes, cortesH, cortesV, utilizables) {
    console.log('this.cortesPliego', cortesPliego);
    console.log('utilizables', utilizables);
    console.log('pliegos', pliegos);
    console.log('cortes', cortes);
    console.log('cortes Vert', cortesV);
    console.log('cortes Hori', cortesH);
  }

  dibujaCuadricula(cortesX, cortesY, width, height, coorX, coorY, escala, color) {

    if (color === 'R') {
        color = '#525E74';
    } else {
        color = '#4E9359';
    }

    const coorY1 = coorY;
    const coorX1 = coorX;
    width = escala * width;
    height = escala * height;

    for (let x = 1; x <= cortesX; x++) {
        coorY = coorY1;

        for (let y = 1; y <= cortesY; y++) {
            this.context.beginPath();
            this.context.fillStyle = color;
            this.context.rect(coorX, coorY, width, height);
            this.context.fill();
            this.context.lineWidth = 1;
            this.context.strokeStyle = 'white';

            this.context.stroke();

            coorY = (height * y) + coorY1;
        }

        coorX = (width * x) + coorX1;
    }
  }
  reset() {
    this.corteLargo = 0.00;
    this.corteAncho = 0.00;
    this.papelAncho = 0.00;
    this.papelLargo = 0.00;
  }

  clearCanvas() {
    // tslint:disable-next-line:max-line-length
    this.context.clearRect(0, 0, (this.canvasEl.nativeElement as HTMLCanvasElement).width, (this.canvasEl.nativeElement as HTMLCanvasElement).height);
  }

  calcular(b, h, cortesV, cortesH, totalCortes, utilizables, orientacion) {

    const cortesDeseados = this.cortesDeseados;
    let pliegosP = 1;
    let pliegos = 0;

    if (orientacion === 'H') {
        pliegos = Math.ceil(cortesDeseados / utilizables);
    } else if (orientacion === 'V') {
        pliegos = Math.ceil(cortesDeseados / utilizables);
    } else {
        // Calculando el numero de pliegos necesarios
        pliegos = Math.ceil(cortesDeseados / totalCortes);
    }

    if (pliegos !== 0 && !isNaN(pliegos)) {
        pliegosP = pliegos;
    } else if (isNaN(pliegos)) {
        pliegos = 0;
    }
    // Calculando el numero total de cortes en todos los pliegos
    const noTotalCortes = totalCortes * pliegos;
    // Imprimiendo resultados
    this.imprimirResultados(totalCortes, pliegos, noTotalCortes, cortesH, cortesV, utilizables);
}

  clearValues() {
    this.clearCanvas();
    this.reset();
  }

}
