import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionEntregaParcialPage } from './atencion-entrega-parcial.page';

describe('AtencionEntregaParcialPage', () => {
  let component: AtencionEntregaParcialPage;
  let fixture: ComponentFixture<AtencionEntregaParcialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtencionEntregaParcialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionEntregaParcialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
