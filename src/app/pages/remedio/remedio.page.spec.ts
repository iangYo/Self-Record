import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedioPage } from './remedio.page';

describe('RemedioPage', () => {
  let component: RemedioPage;
  let fixture: ComponentFixture<RemedioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemedioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
