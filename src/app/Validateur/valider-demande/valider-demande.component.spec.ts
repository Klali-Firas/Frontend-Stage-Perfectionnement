import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderDemandeComponent } from './valider-demande.component';

describe('ValiderDemandeComponent', () => {
  let component: ValiderDemandeComponent;
  let fixture: ComponentFixture<ValiderDemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValiderDemandeComponent]
    });
    fixture = TestBed.createComponent(ValiderDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
