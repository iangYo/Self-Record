import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaginaInicialV2Page } from './pagina-inicial-v2.page';
import { ModalPagePage } from '../modal-page/modal-page.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialV2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaginaInicialV2Page, ModalPagePage],
  entryComponents: [ModalPagePage]  
})
export class PaginaInicialV2PageModule {}
