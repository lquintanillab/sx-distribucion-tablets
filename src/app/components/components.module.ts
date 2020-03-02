import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderSurtidoComponent } from './header-surtido/header-surtido.component';
import { PopoverSurtidoComponent } from './popover-surtido/popover-surtido.component';
import { AsignacionListComponent } from './asignacion-list/asignacion-list.component';
import { AsignacionModalComponent } from './asignacion-modal/asignacion-modal.component';
import { SelectorEmpleadoComponent } from './selector-empleado/selector-empleado.component';
import { FormsModule } from '@angular/forms';
import { SurtidoListComponent } from './surtido-list/surtido-list.component';
import { CorteListComponent } from './corte-list/corte-list.component';
import { EmpaqueModalComponent } from './empaque-modal/empaque-modal.component';
import { AsignadosMesaComponent } from './asignados-mesa/asignados-mesa.component';
import { ActividadModalComponent } from './actividad-modal/actividad-modal.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { CorteParcialModalComponent } from './corte-parcial-modal/corte-parcial-modal.component';
import { EntregaParcialModalComponent } from './entrega-parcial-modal/entrega-parcial-modal.component';
import { AsignacionDocumentModalComponent } from './asignacion-document-modal/asignacion-document-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSurtidoComponent,
    FooterComponent,
    PopoverSurtidoComponent,
    AsignacionListComponent,
    AsignacionModalComponent,
    SelectorEmpleadoComponent,
    SurtidoListComponent,
    CorteListComponent,
    EmpaqueModalComponent,
    AsignadosMesaComponent,
    ActividadModalComponent,
    FooterAdminComponent,
    CorteParcialModalComponent,
    EntregaParcialModalComponent,
    AsignacionDocumentModalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    HeaderSurtidoComponent,
    FooterComponent,
    PopoverSurtidoComponent,
    AsignacionListComponent,
    AsignacionModalComponent,
    SurtidoListComponent,
    CorteListComponent,
    EmpaqueModalComponent,
    AsignadosMesaComponent,
    ActividadModalComponent,
    FooterAdminComponent,
    CorteParcialModalComponent,
    EntregaParcialModalComponent,
    AsignacionDocumentModalComponent,
    SelectorEmpleadoComponent
  ],
  entryComponents: [
    AsignacionModalComponent,
    PopoverSurtidoComponent,
    AsignacionDocumentModalComponent
  ]
})
export class ComponentsModule { }
