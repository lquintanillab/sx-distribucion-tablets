import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregasParcialesPage } from './entregas-parciales.page';

describe('EntregasParcialesPage', () => {
  let component: EntregasParcialesPage;
  let fixture: ComponentFixture<EntregasParcialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregasParcialesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregasParcialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
