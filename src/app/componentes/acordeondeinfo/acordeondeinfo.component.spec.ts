import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeondeinfoComponent } from './acordeondeinfo.component';

describe('AcordeondeinfoComponent', () => {
  let component: AcordeondeinfoComponent;
  let fixture: ComponentFixture<AcordeondeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordeondeinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcordeondeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
