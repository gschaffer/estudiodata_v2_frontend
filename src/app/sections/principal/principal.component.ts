import { Component } from '@angular/core';
import { ServiciosComponent } from '../servicios/servicios.component';
import { InstagramComponent } from '../instagram/instagram.component';

@Component({
  selector: 'app-principal',
  imports: [ServiciosComponent, InstagramComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {}
