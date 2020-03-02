import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformacionesPage } from './transformaciones.page';

describe('TransformacionesPage', () => {
  let component: TransformacionesPage;
  let fixture: ComponentFixture<TransformacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformacionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
