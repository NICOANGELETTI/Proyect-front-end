import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesdashboardComponent } from './redesdashboard.component';

describe('RedesdashboardComponent', () => {
  let component: RedesdashboardComponent;
  let fixture: ComponentFixture<RedesdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
