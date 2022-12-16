import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsEmpComponent } from './lms-emp.component';

describe('LmsEmpComponent', () => {
  let component: LmsEmpComponent;
  let fixture: ComponentFixture<LmsEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmsEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmsEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
