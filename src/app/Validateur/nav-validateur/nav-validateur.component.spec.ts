import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavValidateurComponent } from './nav-validateur.component';

describe('NavValidateurComponent', () => {
  let component: NavValidateurComponent;
  let fixture: ComponentFixture<NavValidateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavValidateurComponent]
    });
    fixture = TestBed.createComponent(NavValidateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
