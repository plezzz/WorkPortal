import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from '../auth/guards/auth.guard';

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
      }
    ]
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);
