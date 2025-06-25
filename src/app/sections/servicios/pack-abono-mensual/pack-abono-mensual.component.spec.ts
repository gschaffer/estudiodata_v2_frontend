import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackAbonoMensualComponent } from './pack-abono-mensual.component';

describe('PackAbonoMensualComponent', () => {
  let component: PackAbonoMensualComponent;
  let fixture: ComponentFixture<PackAbonoMensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackAbonoMensualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackAbonoMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
