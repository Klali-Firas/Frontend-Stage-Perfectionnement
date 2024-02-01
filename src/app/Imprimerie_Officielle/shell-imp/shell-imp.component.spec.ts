import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellImpComponent } from './shell-imp.component';

describe('ShellImpComponent', () => {
  let component: ShellImpComponent;
  let fixture: ComponentFixture<ShellImpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellImpComponent]
    });
    fixture = TestBed.createComponent(ShellImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
