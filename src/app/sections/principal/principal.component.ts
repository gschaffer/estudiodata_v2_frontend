import { Component } from '@angular/core';
import { ServiciosComponent } from '../servicios/servicios.component';

@Component({
  selector: 'app-principal',
  imports: [ServiciosComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {}
