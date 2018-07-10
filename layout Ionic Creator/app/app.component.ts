import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ConfiguraEsPage } from '../pages/configura-es/configura-es';
import { FerramentasPage } from '../pages/ferramentas/ferramentas';
import { SincronizarDadosPage } from '../pages/sincronizar-dados/sincronizar-dados';
import { ListaDeVeCuloPage } from '../pages/lista-de-ve-culo/lista-de-ve-culo';
import { ListaDePedidosPage } from '../pages/lista-de-pedidos/lista-de-pedidos';
import { CadastroDePedidosPage } from '../pages/cadastro-de-pedidos/cadastro-de-pedidos';
import { ItemDoPedidoPage } from '../pages/item-do-pedido/item-do-pedido';
import { PagamentoDoPedidoPage } from '../pages/pagamento-do-pedido/pagamento-do-pedido';
import { ListaDeClientesPage } from '../pages/lista-de-clientes/lista-de-clientes';
import { CadastroDeClientesPage } from '../pages/cadastro-de-clientes/cadastro-de-clientes';
import { EndereOsPage } from '../pages/endere-os/endere-os';
import { CadastroDeEndereOPage } from '../pages/cadastro-de-endere-o/cadastro-de-endere-o';
import { TalhOPage } from '../pages/talh-o/talh-o';
import { CadastroDeTalhEsPage } from '../pages/cadastro-de-talh-es/cadastro-de-talh-es';
import { ListaDeItensPage } from '../pages/lista-de-itens/lista-de-itens';
import { CadastroDeItensPage } from '../pages/cadastro-de-itens/cadastro-de-itens';
import { ListaDeVisitasPage } from '../pages/lista-de-visitas/lista-de-visitas';
import { VisitasInicioPage } from '../pages/visitas-inicio/visitas-inicio';


import { VisOGeralPage } from '../pages/vis-ogeral/vis-ogeral';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = VisOGeralPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToVisOGeral(params){
    if (!params) params = {};
    this.navCtrl.setRoot(VisOGeralPage);
  }goToConfiguraEs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConfiguraEsPage);
  }goToFerramentas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FerramentasPage);
  }goToSincronizarDados(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SincronizarDadosPage);
  }goToListaDeVeCulo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListaDeVeCuloPage);
  }goToListaDePedidos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListaDePedidosPage);
  }goToCadastroDePedidos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastroDePedidosPage);
  }goToItemDoPedido(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ItemDoPedidoPage);
  }goToPagamentoDoPedido(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PagamentoDoPedidoPage);
  }goToListaDeClientes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListaDeClientesPage);
  }goToCadastroDeClientes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastroDeClientesPage);
  }goToEndereOs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EndereOsPage);
  }goToCadastroDeEndereO(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastroDeEndereOPage);
  }goToTalhO(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TalhOPage);
  }goToCadastroDeTalhEs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastroDeTalhEsPage);
  }goToListaDeItens(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListaDeItensPage);
  }goToCadastroDeItens(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastroDeItensPage);
  }goToListaDeVisitas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListaDeVisitasPage);
  }goToVisitasInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(VisitasInicioPage);
  }goToVisOGeral(params){
    if (!params) params = {};
    this.navCtrl.setRoot(VisOGeralPage);
  }
}
