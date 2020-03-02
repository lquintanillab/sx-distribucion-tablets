import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoPage } from './proceso.page';

describe('ProcesoPage', () => {
  let component: ProcesoPage;
  let fixture: ComponentFixture<ProcesoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
