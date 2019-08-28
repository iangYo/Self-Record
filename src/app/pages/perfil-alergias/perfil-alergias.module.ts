import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilAlergiasPage } from './perfil-alergias.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilAlergiasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilAlergiasPage]
})
export class PerfilAlergiasPageModule {}
