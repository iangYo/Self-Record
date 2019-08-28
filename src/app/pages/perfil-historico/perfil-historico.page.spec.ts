import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilHistoricoPage } from './perfil-historico.page';

describe('PerfilHistoricoPage', () => {
  let component: PerfilHistoricoPage;
  let fixture: ComponentFixture<PerfilHistoricoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilHistoricoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilHistoricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
