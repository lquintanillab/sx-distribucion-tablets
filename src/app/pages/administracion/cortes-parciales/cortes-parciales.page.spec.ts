import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CortesParcialesPage } from './cortes-parciales.page';

describe('CortesParcialesPage', () => {
  let component: CortesParcialesPage;
  let fixture: ComponentFixture<CortesParcialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortesParcialesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CortesParcialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
