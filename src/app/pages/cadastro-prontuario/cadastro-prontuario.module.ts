import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroProntuarioPage } from './cadastro-prontuario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroProntuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroProntuarioPage]
})
export class CadastroProntuarioPageModule {}
