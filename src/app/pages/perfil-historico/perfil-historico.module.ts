import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilHistoricoPage } from './perfil-historico.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilHistoricoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilHistoricoPage]
})
export class PerfilHistoricoPageModule {}
