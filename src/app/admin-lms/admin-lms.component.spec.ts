import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLmsComponent } from './admin-lms.component';

describe('AdminLmsComponent', () => {
  let component: AdminLmsComponent;
  let fixture: ComponentFixture<AdminLmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
