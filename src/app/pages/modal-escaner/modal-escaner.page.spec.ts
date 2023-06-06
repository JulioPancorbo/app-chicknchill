import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEscanerPage } from './modal-escaner.page';

describe('ModalEscanerPage', () => {
  let component: ModalEscanerPage;
  let fixture: ComponentFixture<ModalEscanerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEscanerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEscanerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
