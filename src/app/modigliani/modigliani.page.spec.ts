import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiglianiPage } from './modigliani.page';

describe('ModiglianiPage', () => {
  let component: ModiglianiPage;
  let fixture: ComponentFixture<ModiglianiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiglianiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiglianiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
