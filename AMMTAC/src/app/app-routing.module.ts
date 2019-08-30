import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
   /*{ path: 'requisitos', loadChildren: './subpages/requisitos/requisitos.module#RequisitosPageModule' },
  { path: 'directorio', loadChildren: './subpages/directorio/directorio.module#DirectorioPageModule' },
 {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }  { path: 'sesiones', loadChildren: './subpages/sesiones/sesiones.module#SesionesPageModule' }
  { path: 'congresos', loadChildren: './subpages/congresos/congresos.module#CongresosPageModule' }
  { path: 'eventos', loadChildren: './pages/eventos/eventos.module#EventosPageModule' },
  { path: 'acceso', loadChildren: './pages/acceso/acceso.module#AccesoPageModule' },
  { path: 'ligas', loadChildren: './pages/ligas/ligas.module#LigasPageModule' },
  { path: 'donacion', loadChildren: './pages/donacion/donacion.module#DonacionPageModule' },
  { path: 'asociacion', loadChildren: './pages/asociacion/asociacion.module#AsociacionPageModule' },
  { path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoPageModule' },
  { path: 'live', loadChildren: './pages/live/live.module#LivePageModule' },
  { path: 'cursos', loadChildren: './subpages/cursos/cursos.module#CursosPageModule' }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
