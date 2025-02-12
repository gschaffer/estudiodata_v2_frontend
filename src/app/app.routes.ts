import { Routes } from '@angular/router';
import { PrincipalComponent } from './sections/principal/principal.component';
import { ServiciosComponent } from './sections/servicios/servicios.component';
import { RecursosTipsComponent } from './sections/recursos-tips/recursos-tips.component';

export const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    title: '',
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    title: 'Principal',
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
    title: 'Principal',
  },
  {
    path: 'recursos',
    component: RecursosTipsComponent,
    title: 'Recursos',
  },
];
