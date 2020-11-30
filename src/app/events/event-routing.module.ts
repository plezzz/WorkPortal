import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import {AddEventComponent} from './add-event/add-event.component';


const routes: Routes = [
  {
    path: 'events',
    canActivateChild: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CalendarComponent,
        data: {
          isLogged: false,
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