import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleParcialesPage } from './detalle-parciales.page';

describe('DetalleParcialesPage', () => {
  let component: DetalleParcialesPage;
  let fixture: ComponentFixture<DetalleParcialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleParcialesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleParcialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
