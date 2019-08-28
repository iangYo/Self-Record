import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProntuarioPage } from './cadastro-prontuario.page';

describe('CadastroProntuarioPage', () => {
  let component: CadastroProntuarioPage;
  let fixture: ComponentFixture<CadastroProntuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroProntuarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProntuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
