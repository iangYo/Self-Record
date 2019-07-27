import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroProfissionalPage } from './cadastro-profissional.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroProfissionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroProfissionalPage]
})
export class CadastroProfissionalPageModule {}
