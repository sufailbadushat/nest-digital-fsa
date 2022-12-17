import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLmsHistoryComponent } from './admin-lms-history.component';

describe('AdminLmsHistoryComponent', () => {
  let component: AdminLmsHistoryComponent;
  let fixture: ComponentFixture<AdminLmsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLmsHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLmsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
