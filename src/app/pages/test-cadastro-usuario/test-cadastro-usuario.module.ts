import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestCadastroUsuarioPage } from './test-cadastro-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: TestCadastroUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestCadastroUsuarioPage]
})
export class TestCadastroUsuarioPageModule {}
