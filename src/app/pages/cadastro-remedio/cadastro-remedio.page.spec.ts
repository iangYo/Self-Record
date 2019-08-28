import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRemedioPage } from './cadastro-remedio.page';

describe('CadastroRemedioPage', () => {
  let component: CadastroRemedioPage;
  let fixture: ComponentFixture<CadastroRemedioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroRemedioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroRemedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
