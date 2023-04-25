import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-student-sign-up',
  templateUrl: './new-student-sign-up.page.html',
  styleUrls: ['./new-student-sign-up.page.scss'],
})
export class NewStudentSignUpPage implements OnInit {

  constructor(public nc:NavController) { }

  ngOnInit() {
  }
  async sign_in() {
    this.nc.navigateForward('/login')
  }
}
