import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeesLogComponent } from './add-employees-log.component';

describe('AddEmployeesLogComponent', () => {
  let component: AddEmployeesLogComponent;
  let fixture: ComponentFixture<AddEmployeesLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeesLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeesLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
