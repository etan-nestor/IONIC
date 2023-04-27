import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-student-sign-up',
  templateUrl: './student-sign-up.page.html',
  styleUrls: ['./student-sign-up.page.scss'],
})
export class StudentSignUpPage implements OnInit {

  constructor(public nc: NavController,
    // private router: Router, private auth: AngularFireAuth
    ) { }

  ngOnInit() {
  }
  sign_in() {
    this.nc.navigateForward('/login');
  }
  sign_up() {
    // this.nc.navigateForward('/student-home');
  }


}
