import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VisitasInicioPage } from '../visitas-inicio/visitas-inicio';

@Component({
  selector: 'page-lista-de-visitas',
  templateUrl: 'lista-de-visitas.html'
})
export class ListaDeVisitasPage {

  constructor(public navCtrl: NavController) {
  }
  goToVisitasInicio(params){
    if (!params) params = {};
    this.navCtrl.push(VisitasInicioPage);
  }
}
