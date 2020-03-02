import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaEnvioPage } from './entrega-envio.page';

describe('EntregaEnvioPage', () => {
  let component: EntregaEnvioPage;
  let fixture: ComponentFixture<EntregaEnvioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaEnvioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaEnvioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
