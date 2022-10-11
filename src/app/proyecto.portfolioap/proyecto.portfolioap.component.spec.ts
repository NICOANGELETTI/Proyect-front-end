import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoPortfolioapComponent } from './proyecto.portfolioap.component';

describe('ProyectoPortfolioapComponent', () => {
  let component: ProyectoPortfolioapComponent;
  let fixture: ComponentFixture<ProyectoPortfolioapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoPortfolioapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoPortfolioapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
