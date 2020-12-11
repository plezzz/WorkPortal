import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {AuthGuard} from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
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

];

export const AppRoutingModule = RouterModule.forRoot(routes);
