import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          isLogged: true,
          title: 'REGISTER USER'
        },
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          isLogged: false,
          title: 'USER LOGIN'
        }
      },
    ]
  },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
