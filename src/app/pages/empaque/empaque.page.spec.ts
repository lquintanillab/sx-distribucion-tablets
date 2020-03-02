import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaquePage } from './empaque.page';

describe('EmpaquePage', () => {
  let component: EmpaquePage;
  let fixture: ComponentFixture<EmpaquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpaquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
