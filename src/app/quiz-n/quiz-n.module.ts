import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizNPageRoutingModule } from './quiz-n-routing.module';

import { QuizNPage } from './quiz-n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizNPageRoutingModule
  ],
  declarations: [QuizNPage]
})
export class QuizNPageModule {}
