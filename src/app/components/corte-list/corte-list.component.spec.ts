import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorteListComponent } from './corte-list.component';

describe('CorteListComponent', () => {
  let component: CorteListComponent;
  let fixture: ComponentFixture<CorteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorteListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
