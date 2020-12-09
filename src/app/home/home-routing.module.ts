import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'HOME'
    },
  },
];

export const HomeRoutingModule = RouterModule.forChild(routes);
