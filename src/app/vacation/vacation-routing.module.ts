import { RouterModule, Routes } from '@angular/router';
import {VacationComponent} from './vacation/vacation.component';


const routes: Routes = [
  {
    path: 'vacation',
    canActivateChild: [
    ],
    children: [
      {
        path: '',
        pathMatch:'full',
        component: VacationComponent,
        data: {
          isLogged: false,
          noNavigation: true,
          title: 'REGISTER USER'
        },
      },
    ]
  }
];

export const VacationRoutingModule = RouterModule.forChild(routes);
