import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAdminMainComponent } from './nav-bar-admin-main.component';

describe('NavBarAdminMainComponent', () => {
  let component: NavBarAdminMainComponent;
  let fixture: ComponentFixture<NavBarAdminMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarAdminMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarAdminMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
