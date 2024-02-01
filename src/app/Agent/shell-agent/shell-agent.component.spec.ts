import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellAgentComponent } from './shell-agent.component';

describe('ShellAgentComponent', () => {
  let component: ShellAgentComponent;
  let fixture: ComponentFixture<ShellAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellAgentComponent]
    });
    fixture = TestBed.createComponent(ShellAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
