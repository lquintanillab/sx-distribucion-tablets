import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTabPage } from './inicio-tab.page';

describe('InicioTabPage', () => {
  let component: InicioTabPage;
  let fixture: ComponentFixture<InicioTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
