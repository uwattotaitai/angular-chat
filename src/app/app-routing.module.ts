import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component'
import { NotFoundComponent } from './error/not-found/not-found.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { LoginComponent } from './login/login.component'
import { NewUserComponent } from './users/new-user/new-user.component';

const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
