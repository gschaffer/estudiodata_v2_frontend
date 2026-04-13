import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacionArcaComponent } from './situacion-arca.component';

describe('SituacionArcaComponent', () => {
  let component: SituacionArcaComponent;
  let fixture: ComponentFixture<SituacionArcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituacionArcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacionArcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
