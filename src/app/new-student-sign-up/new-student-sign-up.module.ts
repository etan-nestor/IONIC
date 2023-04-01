import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewStudentSignUpPageRoutingModule } from './new-student-sign-up-routing.module';

import { NewStudentSignUpPage } from './new-student-sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewStudentSignUpPageRoutingModule
  ],
  declarations: [NewStudentSignUpPage]
})
export class NewStudentSignUpPageModule {}
