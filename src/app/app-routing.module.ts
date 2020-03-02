import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CorteGuard } from './guards/corte.guard';
import { AdministracionGuard } from './guards/administracion.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'facturas', loadChildren: './pages/facturas/facturas.module#FacturasPageModule' },
  { path: 'pedidos', loadChildren: './pages/pedidos/pedidos.module#PedidosPageModule' },
  { path: 'vales', loadChildren: './pages/vales/vales.module#ValesPageModule' },
  { path: 'transformaciones', loadChildren: './pages/transformaciones/transformaciones.module#TransformacionesPageModule' },
  { path: 'home-tabs', loadChildren: './pages/home-tabs/home-tabs.module#HomeTabsPageModule' },
  { path: 'inicio-tab', loadChildren: './pages/inicio-tab/inicio-tab.module#InicioTabPageModule' },
  { path: 'entrega-local', loadChildren: './pages/entrega-local/entrega-local.module#EntregaLocalPageModule' },
  { path: 'entrega-envio', loadChildren: './pages/entrega-envio/entrega-envio.module#EntregaEnvioPageModule' },
  { path: 'entrega-corte', loadChildren: './pages/entrega-corte/entrega-corte.module#EntregaCortePageModule' },
  { path: 'empaque', loadChildren: './pages/empaque/empaque.module#EmpaquePageModule' },
  { path: 'corte', canActivate: [CorteGuard], loadChildren: './pages/corte/corte.module#CortePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'administracion', canActivate: [AdministracionGuard], loadChildren: './pages/administracion/administracion.module#AdministracionPageModule' },
  { path: 'proceso', loadChildren: './pages/proceso/proceso.module#ProcesoPageModule' },
  { path: 'calculadora', loadChildren: './pages/calculadora/calculadora.module#CalculadoraPageModule' },
  { path: 'actividades', loadChildren: './pages/administracion/actividades/actividades.module#ActividadesPageModule' },
  { path: 'buscador', loadChildren: './pages/administracion/buscador/buscador.module#BuscadorPageModule' },
  { path: 'parciales-tabs', loadChildren: './pages/administracion/parciales-tabs/parciales-tabs.module#ParcialesTabsPageModule' },
  { path: 'buscador', loadChildren: './pages/administracion/buscador/buscador.module#BuscadorPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'atencion-entrega-parcial', loadChildren: './pages/administracion/atencion-entrega-parcial/atencion-entrega-parcial.module#AtencionEntregaParcialPageModule' },
  { path: 'control', loadChildren: './pages/administracion/control/control.module#ControlPageModule' },
  { path: 'surtido-det', loadChildren: './pages/administracion/surtido-det/surtido-det.module#SurtidoDetPageModule' },
  { path: 'detalle-parciales', loadChildren: './pages/administracion/detalle-parciales/detalle-parciales.module#DetalleParcialesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
