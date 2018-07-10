import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VisOGeralPage } from '../vis-ogeral/vis-ogeral';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToVisOGeral(params){
    if (!params) params = {};
    this.navCtrl.push(VisOGeralPage);
  }
}
