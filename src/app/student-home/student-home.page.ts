import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.page.html',
  styleUrls: ['./student-home.page.scss'],
})
export class StudentHomePage implements OnInit {

  constructor(public nc: NavController,public lc:LoadingController) { }

  ngOnInit() {
  }
  async infos_ibam() {
    let load = await this.lc.create({
      message:"Patientez Svp",
      duration:300

    })
    await load.present();
    this.nc.navigateForward('/infos-ibam')
 }
  async anciens_sujets() {
    let load = await this.lc.create({
      message:"Patientez Svp",
      duration:300

    })
    await load.present();
    this.nc.navigateForward('/anciens-sujets')
 }
  async notification() {
    this.nc.navigateForward('/notification')
 }
  async home() {
    this.nc.navigateForward('/student-home')
 }
  async quiz() {
    this.nc.navigateForward('/quiz')
 }
  

}
