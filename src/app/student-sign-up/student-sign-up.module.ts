import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentSignUpPageRoutingModule } from './student-sign-up-routing.module';

import { StudentSignUpPage } from './student-sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentSignUpPageRoutingModule
  ],
  declarations: [StudentSignUpPage]
})
export class StudentSignUpPageModule {}
