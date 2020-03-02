import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurtidoDetPage } from './surtido-det.page';

describe('SurtidoDetPage', () => {
  let component: SurtidoDetPage;
  let fixture: ComponentFixture<SurtidoDetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurtidoDetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurtidoDetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
