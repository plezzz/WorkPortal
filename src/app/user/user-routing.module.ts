import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from '../auth/guards/auth.guard';
import { AllComponent } from './all/all.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {
    path: 'user',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          isLogged: true,
          title: 'USER PROFILE'
        }
      },
      {
        path: 'all',
        component: AllComponent,
        data: {
          isLogged: true,
          title: 'USER PROFILE'
        }
      },
      {
        path: 'details/:id',
        component: UserComponent,
        data: {
          isLogged: true,
          title: 'USER PROFILE'
        }
      }
    ]
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);
