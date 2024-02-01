import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellValidateurComponent } from './shell-validateur.component';

describe('ShellValidateurComponent', () => {
  let component: ShellValidateurComponent;
  let fixture: ComponentFixture<ShellValidateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellValidateurComponent]
    });
    fixture = TestBed.createComponent(ShellValidateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
