import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroConsultaPage } from './cadastro-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroConsultaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroConsultaPage]
})
export class CadastroConsultaPageModule {}
