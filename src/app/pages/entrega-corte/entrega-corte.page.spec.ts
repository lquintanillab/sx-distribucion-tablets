import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaCortePage } from './entrega-corte.page';

describe('EntregaCortePage', () => {
  let component: EntregaCortePage;
  let fixture: ComponentFixture<EntregaCortePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaCortePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaCortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
