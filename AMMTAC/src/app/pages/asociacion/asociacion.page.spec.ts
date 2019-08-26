import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociacionPage } from './asociacion.page';

describe('AsociacionPage', () => {
  let component: AsociacionPage;
  let fixture: ComponentFixture<AsociacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsociacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
