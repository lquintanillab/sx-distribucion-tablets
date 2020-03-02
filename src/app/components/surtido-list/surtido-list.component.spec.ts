import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurtidoListComponent } from './surtido-list.component';

describe('SurtidoListComponent', () => {
  let component: SurtidoListComponent;
  let fixture: ComponentFixture<SurtidoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurtidoListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurtidoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
