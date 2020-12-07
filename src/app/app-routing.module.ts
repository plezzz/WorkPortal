import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/guards/guards.guard';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {HomeComponent} from './home/home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          //isLogged: true,
          title: 'HOME'
        },
      },
      {
        path: 'auth',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      // {
      //   path: 'home',
      //   canActivateChild: [AuthGuard],
      //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      // },
      {
        path: 'user',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'events',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./events/event.module').then(m => m.EventModule)
      },
      {
        path: '**',
        component: NotFoundComponent,
        data: {
          title: '404'
        }
      }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
