import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceDemandeComponent } from './trace-demande.component';

describe('TraceDemandeComponent', () => {
  let component: TraceDemandeComponent;
  let fixture: ComponentFixture<TraceDemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraceDemandeComponent]
    });
    fixture = TestBed.createComponent(TraceDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
