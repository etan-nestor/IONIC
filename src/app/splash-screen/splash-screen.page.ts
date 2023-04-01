import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(public nc:NavController) { }

  ngOnInit() {
  }
  skip() {
    this.nc.navigateForward('/welcome')
  };
  next() {
    this.nc.navigateForward('/welcome')
}

}
