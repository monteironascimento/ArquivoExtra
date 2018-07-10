import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDoPedidoPage } from '../item-do-pedido/item-do-pedido';
import { PagamentoDoPedidoPage } from '../pagamento-do-pedido/pagamento-do-pedido';

@Component({
  selector: 'page-cadastro-de-pedidos',
  templateUrl: 'cadastro-de-pedidos.html'
})
export class CadastroDePedidosPage {

  constructor(public navCtrl: NavController) {
  }
  goToItemDoPedido(params){
    if (!params) params = {};
    this.navCtrl.push(ItemDoPedidoPage);
  }goToPagamentoDoPedido(params){
    if (!params) params = {};
    this.navCtrl.push(PagamentoDoPedidoPage);
  }
}
