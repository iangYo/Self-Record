import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroRemedioPage } from './cadastro-remedio.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroRemedioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroRemedioPage]
})
export class CadastroRemedioPageModule {}
