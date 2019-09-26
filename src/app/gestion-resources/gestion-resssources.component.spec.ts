import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionResssourcesComponent } from './gestion-resssources.component';

describe('GestionResssourcesComponent', () => {
  let component: GestionResssourcesComponent;
  let fixture: ComponentFixture<GestionResssourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionResssourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionResssourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
