import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-new-student-home',
  templateUrl: './new-student-home.page.html',
  styleUrls: ['./new-student-home.page.scss'],
})
export class NewStudentHomePage implements OnInit {
  isMenuOpen: boolean = false;
  constructor(public nc: NavController,public lc:LoadingController) { }

  ngOnInit() {
  }

  menu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  async infos_ibam() {
    let load = await this.lc.create({
      message:"Patientez Svp",
      duration:300

    })
    await load.present();
    this.nc.navigateForward('/infos-ibam')
 }
  async sujets_test() {
    let load = await this.lc.create({
      message:"Patientez Svp",
      duration:300

    })
    await load.present();
    this.nc.navigateForward('/sujets-test')
  }
    async notification() {
    this.nc.navigateForward('/notification-n')
 }
  async home() {
    this.nc.navigateForward('/new-student-home')
 }
  async quiz() {
    this.nc.navigateForward('/quiz-n')
 }

}
