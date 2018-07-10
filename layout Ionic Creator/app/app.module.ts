import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { VisOGeralPage } from '../pages/vis-ogeral/vis-ogeral';
import { VisitasInicioPage } from '../pages/visitas-inicio/visitas-inicio';
import { LoginPage } from '../pages/login/login';
import { RegistrarSePage } from '../pages/registrar-se/registrar-se';
import { ConfiguraEsPage } from '../pages/configura-es/configura-es';
import { FerramentasPage } from '../pages/ferramentas/ferramentas';
import { SincronizarDadosPage } from '../pages/sincronizar-dados/sincronizar-dados';
import { VisitasAtividadePage } from '../pages/visitas-atividade/visitas-atividade';
import { VisitasOutrosPage } from '../pages/visitas-outros/visitas-outros';
import { CadastroDePedidosPage } from '../pages/cadastro-de-pedidos/cadastro-de-pedidos';
import { ItemDoPedidoPage } from '../pages/item-do-pedido/item-do-pedido';
import { PagamentoDoPedidoPage } from '../pages/pagamento-do-pedido/pagamento-do-pedido';
import { ListaDePedidosPage } from '../pages/lista-de-pedidos/lista-de-pedidos';
import { ListaDeVeCuloPage } from '../pages/lista-de-ve-culo/lista-de-ve-culo';
import { ListaDeClientesPage } from '../pages/lista-de-clientes/lista-de-clientes';
import { ListaDeVisitasPage } from '../pages/lista-de-visitas/lista-de-visitas';
import { CadastroDeClientesPage } from '../pages/cadastro-de-clientes/cadastro-de-clientes';
import { CadastroDeEndereOPage } from '../pages/cadastro-de-endere-o/cadastro-de-endere-o';
import { CadastroDeItensPage } from '../pages/cadastro-de-itens/cadastro-de-itens';
import { CadastroDeTalhEsPage } from '../pages/cadastro-de-talh-es/cadastro-de-talh-es';
import { EndereOsPage } from '../pages/endere-os/endere-os';
import { TalhOPage } from '../pages/talh-o/talh-o';
import { ListaDeItensPage } from '../pages/lista-de-itens/lista-de-itens';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    VisOGeralPage,
    VisitasInicioPage,
    LoginPage,
    RegistrarSePage,
    ConfiguraEsPage,
    FerramentasPage,
    SincronizarDadosPage,
    VisitasAtividadePage,
    VisitasOutrosPage,
    CadastroDePedidosPage,
    ItemDoPedidoPage,
    PagamentoDoPedidoPage,
    ListaDePedidosPage,
    ListaDeVeCuloPage,
    ListaDeClientesPage,
    ListaDeVisitasPage,
    CadastroDeClientesPage,
    CadastroDeEndereOPage,
    CadastroDeItensPage,
    CadastroDeTalhEsPage,
    EndereOsPage,
    TalhOPage,
    ListaDeItensPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VisOGeralPage,
    VisitasInicioPage,
    LoginPage,
    RegistrarSePage,
    ConfiguraEsPage,
    FerramentasPage,
    SincronizarDadosPage,
    VisitasAtividadePage,
    VisitasOutrosPage,
    CadastroDePedidosPage,
    ItemDoPedidoPage,
    PagamentoDoPedidoPage,
    ListaDePedidosPage,
    ListaDeVeCuloPage,
    ListaDeClientesPage,
    ListaDeVisitasPage,
    CadastroDeClientesPage,
    CadastroDeEndereOPage,
    CadastroDeItensPage,
    CadastroDeTalhEsPage,
    EndereOsPage,
    TalhOPage,
    ListaDeItensPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}