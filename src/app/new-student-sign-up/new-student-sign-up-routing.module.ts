import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewStudentSignUpPage } from './new-student-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: NewStudentSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewStudentSignUpPageRoutingModule {}
