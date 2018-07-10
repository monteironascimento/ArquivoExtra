import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EndereOsPage } from '../endere-os/endere-os';
import { CadastroDeEndereOPage } from '../cadastro-de-endere-o/cadastro-de-endere-o';
import { TalhOPage } from '../talh-o/talh-o';
import { CadastroDeTalhEsPage } from '../cadastro-de-talh-es/cadastro-de-talh-es';

@Component({
  selector: 'page-cadastro-de-clientes',
  templateUrl: 'cadastro-de-clientes.html'
})
export class CadastroDeClientesPage {

  constructor(public navCtrl: NavController) {
  }
  goToEndereOs(params){
    if (!params) params = {};
    this.navCtrl.push(EndereOsPage);
  }goToCadastroDeEndereO(params){
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
