import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeamandesAPublierComponent } from './deamandes-apublier.component';

describe('DeamandesAPublierComponent', () => {
  let component: DeamandesAPublierComponent;
  let fixture: ComponentFixture<DeamandesAPublierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeamandesAPublierComponent]
    });
    fixture = TestBed.createComponent(DeamandesAPublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
