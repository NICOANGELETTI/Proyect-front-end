import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodydasboardComponent } from './bodydasboard.component';

describe('BodydasboardComponent', () => {
  let component: BodydasboardComponent;
  let fixture: ComponentFixture<BodydasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodydasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodydasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
