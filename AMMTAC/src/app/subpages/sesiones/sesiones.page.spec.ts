import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesPage } from './sesiones.page';

describe('SesionesPage', () => {
  let component: SesionesPage;
  let fixture: ComponentFixture<SesionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
