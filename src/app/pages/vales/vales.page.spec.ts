import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValesPage } from './vales.page';

describe('ValesPage', () => {
  let component: ValesPage;
  let fixture: ComponentFixture<ValesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
