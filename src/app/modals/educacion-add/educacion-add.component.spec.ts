import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionAddComponent } from './educacion-add.component';

describe('EducacionAddComponent', () => {
  let component: EducacionAddComponent;
  let fixture: ComponentFixture<EducacionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
