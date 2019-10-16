import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotticelliPage } from './botticelli.page';

describe('BotticelliPage', () => {
  let component: BotticelliPage;
  let fixture: ComponentFixture<BotticelliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotticelliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotticelliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
