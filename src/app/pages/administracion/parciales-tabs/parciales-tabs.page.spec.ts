import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcialesTabsPage } from './parciales-tabs.page';

describe('ParcialesTabsPage', () => {
  let component: ParcialesTabsPage;
  let fixture: ComponentFixture<ParcialesTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcialesTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcialesTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
