import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroDeEndereOPage } from '../cadastro-de-endere-o/cadastro-de-endere-o';
import { TalhOPage } from '../talh-o/talh-o';
import { CadastroDeTalhEsPage } from '../cadastro-de-talh-es/cadastro-de-talh-es';

@Component({
  selector: 'page-endere-os',
  templateUrl: 'endere-os.html'
})
export class EndereOsPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastroDeEndereO(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeEndereOPage);
  }goToTalhO(params){
    if (!params) params = {};
    this.navCtrl.push(TalhOPage);
  }goToCadastroDeTalhEs(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeTalhEsPage);
  }
}
