import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelazquezPage } from './velazquez.page';

describe('VelazquezPage', () => {
  let component: VelazquezPage;
  let fixture: ComponentFixture<VelazquezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelazquezPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelazquezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
