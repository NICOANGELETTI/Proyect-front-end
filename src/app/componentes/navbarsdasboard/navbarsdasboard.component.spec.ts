import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsdasboardComponent } from './navbarsdasboard.component';

describe('NavbarsdasboardComponent', () => {
  let component: NavbarsdasboardComponent;
  let fixture: ComponentFixture<NavbarsdasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarsdasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarsdasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
