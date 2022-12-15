import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePotrtalComponent } from './employee-potrtal.component';

describe('EmployeePotrtalComponent', () => {
  let component: EmployeePotrtalComponent;
  let fixture: ComponentFixture<EmployeePotrtalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePotrtalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePotrtalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
