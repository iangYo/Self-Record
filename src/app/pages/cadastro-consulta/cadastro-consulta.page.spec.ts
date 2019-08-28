import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroConsultaPage } from './cadastro-consulta.page';

describe('CadastroConsultaPage', () => {
  let component: CadastroConsultaPage;
  let fixture: ComponentFixture<CadastroConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroConsultaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
