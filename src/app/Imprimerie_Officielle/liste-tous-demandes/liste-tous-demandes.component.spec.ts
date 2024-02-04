import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTousDemandesComponent } from './liste-tous-demandes.component';

describe('ListeTousDemandesComponent', () => {
  let component: ListeTousDemandesComponent;
  let fixture: ComponentFixture<ListeTousDemandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeTousDemandesComponent]
    });
    fixture = TestBed.createComponent(ListeTousDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
