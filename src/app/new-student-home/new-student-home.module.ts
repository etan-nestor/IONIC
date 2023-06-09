import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewStudentHomePageRoutingModule } from './new-student-home-routing.module';

import { NewStudentHomePage } from './new-student-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewStudentHomePageRoutingModule
  ],
  declarations: [NewStudentHomePage]
})
export class NewStudentHomePageModule {}
