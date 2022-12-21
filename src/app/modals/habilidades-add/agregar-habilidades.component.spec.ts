import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHabilidadesComponent } from './agregar-habilidades.component';

describe('AgregarHabilidadesComponent', () => {
  let component: AgregarHabilidadesComponent;
  let fixture: ComponentFixture<AgregarHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
