import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TalhOPage } from '../talh-o/talh-o';
import { CadastroDeTalhEsPage } from '../cadastro-de-talh-es/cadastro-de-talh-es';

@Component({
  selector: 'page-cadastro-de-endere-o',
  templateUrl: 'cadastro-de-endere-o.html'
})
export class CadastroDeEndereOPage {

  constructor(public navCtrl: NavController) {
  }
  goToTalhO(params){
    if (!params) params = {};
    this.navCtrl.push(TalhOPage);
  }goToCadastroDeTalhEs(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeTalhEsPage);
  }
}
