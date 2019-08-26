import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'eventos',
            loadChildren: () =>
              import('../pages/eventos/eventos.module').then(m => m.EventosPageModule)
          },
          {
            path: 'acceso',
            loadChildren: () =>
              import('../pages/acceso/acceso.module').then(m => m.AccesoPageModule)
          },
          {
            path: 'ligas',
            loadChildren: () =>
              import('../pages/ligas/ligas.module').then(m => m.LigasPageModule)
          },
          {
            path: 'donacion',
            loadChildren: () =>
              import('../pages/donacion/donacion.module').then(m => m.DonacionPageModule)
          },
          {
            path: 'asociacion',
            loadChildren: () =>
              import('../pages/asociacion/asociacion.module').then(m => m.AsociacionPageModule)
          },
          {
            path: 'contacto',
            loadChildren: () =>
              import('../pages/contacto/contacto.module').then(m => m.ContactoPageModule)
          },
          {
            path: 'live',
            loadChildren: () =>
              import('../pages/live/live.module').then(m => m.LivePageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
