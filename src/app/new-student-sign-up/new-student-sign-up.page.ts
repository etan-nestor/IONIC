import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-new-student-sign-up',
  templateUrl: './new-student-sign-up.page.html',
  styleUrls: ['./new-student-sign-up.page.scss'],
})
export class NewStudentSignUpPage implements OnInit {
  // annee_bac!: string;
  // email!: string;
  // id!: string;
  // nom!: string;
  // password!: string;
  // prenom!: string;
  // profil!: string;
  // serie_bac!: string;
  // username!: string;

  constructor(
    public nc: NavController,
    // private afAuth: AngularFireAuth,
    // private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  async sign_in() {
    this.nc.navigateForward('/login');
  }

//   async sign_up() {
//     try {
//     // Créer un nouvel utilisateur avec l'e-mail et le mot de passe
//     const userCredential = await this.afAuth.createUserWithEmailAndPassword(
//       this.email,
//       this.password
//     );
//     const user = userCredential.user;

//     if (user) { // Vérifier si user n'est pas null
//       // Ajouter les données supplémentaires de l'étudiant à la collection Firebase
//       await this.firestore.collection('N-etudiant').doc(user.uid).set({
//         annee_bac: this.annee_bac,
//         email: this.email,
//         id: user.uid,
//         nom: this.nom,
//         prenom: this.prenom,
//         profil: this.profil,
//         serie_bac: this.serie_bac,
//         username: this.username
//       });

//       // Rediriger l'utilisateur vers la page de connexion
//       this.nc.navigateForward('/login');
//     } else {
//       console.log('user est null');
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

}
