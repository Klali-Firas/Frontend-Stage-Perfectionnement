import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesAValiderComponent } from './demandes-avalider.component';

describe('DemandesAValiderComponent', () => {
  let component: DemandesAValiderComponent;
  let fixture: ComponentFixture<DemandesAValiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandesAValiderComponent]
    });
    fixture = TestBed.createComponent(DemandesAValiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
