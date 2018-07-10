import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroDePedidosPage } from '../cadastro-de-pedidos/cadastro-de-pedidos';
import { ItemDoPedidoPage } from '../item-do-pedido/item-do-pedido';
import { PagamentoDoPedidoPage } from '../pagamento-do-pedido/pagamento-do-pedido';

@Component({
  selector: 'page-lista-de-pedidos',
  templateUrl: 'lista-de-pedidos.html'
})
export class ListaDePedidosPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastroDePedidos(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDePedidosPage);
  }goToItemDoPedido(params){
    if (!params) params = {};
    this.navCtrl.push(ItemDoPedidoPage);
  }goToPagamentoDoPedido(params){
    if (!params) params = {};
    this.navCtrl.push(PagamentoDoPedidoPage);
  }
}
