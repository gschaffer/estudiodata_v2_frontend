import { Routes } from '@angular/router';
import { PrincipalComponent } from './sections/principal/principal.component';
import { ServiciosComponent } from './sections/servicios/servicios.component';
import { RecursosTipsComponent } from './sections/recursos-tips/recursos-tips.component';
import { LiquidacionSueldosComponent } from './sections/servicios/liquidacion-sueldos/liquidacion-sueldos.component';
import { AltaImpuestosComponent } from './sections/servicios/alta-impuestos/alta-impuestos.component';

export const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    title: 'principal',
  },
  {
    path: 'recursos',
    component: RecursosTipsComponent,
    title: 'Recursos',
  },
  { path: 'liquidacion-sueldos', component: LiquidacionSueldosComponent },
  { path: 'alta-impuestos', component: AltaImpuestosComponent },
  {
    path: 'servicios',
    /*     children: [
      { path: 'liquidacion-sueldos', component: LiquidacionSueldosComponent },
    ], */
    component: ServiciosComponent,
    title: 'Servicios',
  },

  {
    path: 'principal',
    component: PrincipalComponent,
    title: 'Principal',
  },
];
