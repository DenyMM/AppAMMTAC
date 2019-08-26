import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigasPage } from './ligas.page';

describe('LigasPage', () => {
  let component: LigasPage;
  let fixture: ComponentFixture<LigasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
