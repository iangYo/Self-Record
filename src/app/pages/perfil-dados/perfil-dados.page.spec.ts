import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDadosPage } from './perfil-dados.page';

describe('PerfilDadosPage', () => {
  let component: PerfilDadosPage;
  let fixture: ComponentFixture<PerfilDadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
