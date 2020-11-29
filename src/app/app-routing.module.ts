import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './core/notfound/notfound.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'HOME'
        }
      },
      {
        path: '**',
        component: NotfoundComponent,
        data: {
          title: '404'
        }
      }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
