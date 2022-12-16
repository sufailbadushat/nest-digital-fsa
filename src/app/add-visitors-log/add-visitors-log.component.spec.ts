import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitorsLogComponent } from './add-visitors-log.component';

describe('AddVisitorsLogComponent', () => {
  let component: AddVisitorsLogComponent;
  let fixture: ComponentFixture<AddVisitorsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitorsLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVisitorsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
