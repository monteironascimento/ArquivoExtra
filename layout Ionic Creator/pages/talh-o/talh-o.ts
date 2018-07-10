import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroDeTalhEsPage } from '../cadastro-de-talh-es/cadastro-de-talh-es';

@Component({
  selector: 'page-talh-o',
  templateUrl: 'talh-o.html'
})
export class TalhOPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastroDeTalhEs(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeTalhEsPage);
  }
}
