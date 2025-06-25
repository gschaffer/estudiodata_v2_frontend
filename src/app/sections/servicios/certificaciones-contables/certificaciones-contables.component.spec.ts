import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacionesContablesComponent } from './certificaciones-contables.component';

describe('CertificacionesContablesComponent', () => {
  let component: CertificacionesContablesComponent;
  let fixture: ComponentFixture<CertificacionesContablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificacionesContablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificacionesContablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
