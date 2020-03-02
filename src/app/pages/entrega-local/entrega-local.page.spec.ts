import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaLocalPage } from './entrega-local.page';

describe('EntregaLocalPage', () => {
  let component: EntregaLocalPage;
  let fixture: ComponentFixture<EntregaLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaLocalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
