import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroDeItensPage } from '../cadastro-de-itens/cadastro-de-itens';

@Component({
  selector: 'page-lista-de-itens',
  templateUrl: 'lista-de-itens.html'
})
export class ListaDeItensPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastroDeItens(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeItensPage);
  }
}
