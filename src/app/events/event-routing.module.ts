import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import {AddEventComponent} from './add-event/add-event.component';
import {AuthGuard} from '../core/guards/auth.guard';


const routes: Routes = [
  {
    path: 'events',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CalendarComponent,
        data: {
          isLogged: true,
          title: 'Календар'
        },
      }, {
        path: 'add-event',
        pathMatch: 'full',
        component: AddEventComponent,
        data: {
          isLogged: false,
          title: 'Календар'
        },
      },
    ]
  }
];

export const EventRoutingModule = RouterModule.forChild(routes);
