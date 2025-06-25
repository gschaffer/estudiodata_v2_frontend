import { Routes } from '@angular/router';
import { PrincipalComponent } from './sections/principal/principal.component';
import { ServiciosComponent } from './sections/servicios/servicios.component';
import { RecursosTipsComponent } from './sections/recursos-tips/recursos-tips.component';
import { LiquidacionSueldosComponent } from './sections/servicios/liquidacion-sueldos/liquidacion-sueldos.component';
import { AltaImpuestosComponent } from './sections/servicios/alta-impuestos/alta-impuestos.component';
import { PackAbonoMensualComponent } from './sections/servicios/pack-abono-mensual/pack-abono-mensual.component';
import { CertificacionesContablesComponent } from './sections/servicios/certificaciones-contables/certificaciones-contables.component';
import { SituacionArcaComponent } from './sections/servicios/situacion-arca/situacion-arca.component';

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
  { path: 'alta-impuestos', component: AltaImpuestosComponent },
  { path: 'pack-abono-mensual', component: PackAbonoMensualComponent },
  { path: 'liquidacion-sueldos', component: LiquidacionSueldosComponent },
  {
    path: 'certificaciones-contables',
    component: CertificacionesContablesComponent,
  },
  { path: 'situacion-arca', component: SituacionArcaComponent },
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
