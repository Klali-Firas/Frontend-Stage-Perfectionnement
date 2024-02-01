import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavImpComponent } from './nav-imp.component';

describe('NavImpComponent', () => {
  let component: NavImpComponent;
  let fixture: ComponentFixture<NavImpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavImpComponent]
    });
    fixture = TestBed.createComponent(NavImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
