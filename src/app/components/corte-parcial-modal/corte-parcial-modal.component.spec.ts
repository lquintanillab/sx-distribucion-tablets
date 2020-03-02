import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorteParcialModalComponent } from './corte-parcial-modal.component';

describe('CorteParcialModalComponent', () => {
  let component: CorteParcialModalComponent;
  let fixture: ComponentFixture<CorteParcialModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorteParcialModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorteParcialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
