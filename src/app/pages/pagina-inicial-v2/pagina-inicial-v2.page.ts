import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-pagina-inicial-v2',
  templateUrl: './pagina-inicial-v2.page.html',
  styleUrls: ['./pagina-inicial-v2.page.scss'],
})
export class PaginaInicialV2Page implements OnInit {

  constructor(public modalController: ModalController) { }


  async clickModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage
    });

    modal.present();

  }

  ngOnInit() {
  }

}
