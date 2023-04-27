import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { AngularFireAuth} from '@angular/fire/compat/auth';
// import { AngularFirestore  } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-new-student-sign-up',
  templateUrl: './new-student-sign-up.page.html',
  styleUrls: ['./new-student-sign-up.page.scss'],
})
export class NewStudentSignUpPage implements OnInit {
    // username = '';
    // email = '';
    // password = '';

  constructor(
    public nc: NavController,
    // private auth: AngularFireAuth,
    // private firestore: AngularFirestore 
  ) {}
  ngOnInit() {
  }

  async sign_in() {
    this.nc.navigateForward('/login');
  }

  async signUp() {
      // try {
      //   const userCredential = await this.auth.createUserWithEmailAndPassword(this.email, this.password);

      //   if (userCredential && userCredential.user) {
      //     await userCredential.user.updateProfile({
      //       displayName: this.username
      //     });

      //     await this.firestore.collection('N-etudiant').doc(userCredential.user.uid).set({
      //       email: this.email,
      //       username: this.username,
      //       uid: userCredential.user.uid
      //     });

      //     // Navigate to the login page
      //     this.nc.navigateForward('/login');
      //   }

      // } catch (error) {
      //   console.log('Error creating user:', error);
      // }
    }

}
