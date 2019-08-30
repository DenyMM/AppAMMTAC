import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioPage } from './directorio.page';

describe('DirectorioPage', () => {
  let component: DirectorioPage;
  let fixture: ComponentFixture<DirectorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
