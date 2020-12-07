import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
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
];

export const AuthRoutingModule = RouterModule.forChild(routes);
