import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinstitutionComponent } from './editinstitution.component';

describe('EditinstitutionComponent', () => {
  let component: EditinstitutionComponent;
  let fixture: ComponentFixture<EditinstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditinstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
