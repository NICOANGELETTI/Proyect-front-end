import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialbardashboardComponent } from './socialbardashboard.component';

describe('SocialbardashboardComponent', () => {
  let component: SocialbardashboardComponent;
  let fixture: ComponentFixture<SocialbardashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialbardashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialbardashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
