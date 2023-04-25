import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student-home',
    pathMatch: 'full'
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'student-sign-up',
    loadChildren: () => import('./student-sign-up/student-sign-up.module').then( m => m.StudentSignUpPageModule)
  },
  {
    path: 'new-student-sign-up',
    loadChildren: () => import('./new-student-sign-up/new-student-sign-up.module').then( m => m.NewStudentSignUpPageModule)
  },
  {
    path: 'student-home',
    loadChildren: () => import('./student-home/student-home.module').then( m => m.StudentHomePageModule)
  },
  {
    path: 'new-student-home',
    loadChildren: () => import('./new-student-home/new-student-home.module').then( m => m.NewStudentHomePageModule)
  },
  {
    path: 'sujets-test',
    loadChildren: () => import('./sujets-test/sujets-test.module').then( m => m.SujetsTestPageModule)
  },
  {
    path: 'infos-ibam',
    loadChildren: () => import('./infos-ibam/infos-ibam.module').then( m => m.InfosIbamPageModule)
  },
  {
    path: 'options-pay',
    loadChildren: () => import('./options-pay/options-pay.module').then( m => m.OptionsPayPageModule)
  },
  {
    path: 'sujets-payes',
    loadChildren: () => import('./sujets-payes/sujets-payes.module').then( m => m.SujetsPayesPageModule)
  },
  {
    path: 'sujets-non-payes',
    loadChildren: () => import('./sujets-non-payes/sujets-non-payes.module').then( m => m.SujetsNonPayesPageModule)
  },
  {
    path: 'admins',
    loadChildren: () => import('./admins/admins.module').then( m => m.AdminsPageModule)
  },
  {
    path: 'admin-dev',
    loadChildren: () => import('./admin-dev/admin-dev.module').then( m => m.AdminDevPageModule)
  },
  {
    path: 'admin-adm',
    loadChildren: () => import('./admin-adm/admin-adm.module').then( m => m.AdminAdmPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'anciens-sujets',
    loadChildren: () => import('./anciens-sujets/anciens-sujets.module').then( m => m.AnciensSujetsPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
