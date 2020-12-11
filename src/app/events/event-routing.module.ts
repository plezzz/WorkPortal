import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import {AddEventComponent} from './add-event/add-event.component';
import {DetailsComponent} from './details/details.component';
import {AuthGuard} from '../auth/guards/auth.guard';


const routes: Routes = [
  {
    path: 'events',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: CalendarComponent,
        data: {
          isLogged: true,
          title: 'Календар'
        },
      },
      {
        path: 'add-event',
        component: AddEventComponent,
        pathMatch: 'full',
        data: {
          isLogged: true,
          title: 'Календар'
        },
      },
      {
        path: ':id',
        component: DetailsComponent,
        data: {
          isLogged: true,
          title: 'Календар'
        },
      },
    ]
  }
];

export const EventRoutingModule = RouterModule.forChild(routes);
