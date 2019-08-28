import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAlergiasPage } from './perfil-alergias.page';

describe('PerfilAlergiasPage', () => {
  let component: PerfilAlergiasPage;
  let fixture: ComponentFixture<PerfilAlergiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAlergiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAlergiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
