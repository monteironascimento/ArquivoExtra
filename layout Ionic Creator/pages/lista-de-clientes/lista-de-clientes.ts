import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroDeClientesPage } from '../cadastro-de-clientes/cadastro-de-clientes';
import { EndereOsPage } from '../endere-os/endere-os';
import { CadastroDeEndereOPage } from '../cadastro-de-endere-o/cadastro-de-endere-o';
import { TalhOPage } from '../talh-o/talh-o';
import { CadastroDeTalhEsPage } from '../cadastro-de-talh-es/cadastro-de-talh-es';

@Component({
  selector: 'page-lista-de-clientes',
  templateUrl: 'lista-de-clientes.html'
})
export class ListaDeClientesPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastroDeClientes(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeClientesPage);
  }goToEndereOs(params){
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
