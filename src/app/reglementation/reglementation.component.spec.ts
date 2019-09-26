import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementationComponent } from './reglementation.component';

describe('ReglementationComponent', () => {
  let component: ReglementationComponent;
  let fixture: ComponentFixture<ReglementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
