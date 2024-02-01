import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierDemandeComponent } from './publier-demande.component';

describe('PublierDemandeComponent', () => {
  let component: PublierDemandeComponent;
  let fixture: ComponentFixture<PublierDemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublierDemandeComponent]
    });
    fixture = TestBed.createComponent(PublierDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
