import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import {AddEventComponent} from './add-event/add-event.component';
import {DetailsComponent} from './details/details.component';


const routes: Routes = [
  {
    path: 'events',
    component: CalendarComponent,
    pathMatch: 'full',
    data: {
      isLogged: true,
      title: 'Календар'
    },
  },
  {
    path: 'events/add-event',
    component: AddEventComponent,
    pathMatch: 'full',
    data: {
      isLogged: true,
      title: 'Календар'
    },
  },
  {
    path: 'events/:id',
    component: DetailsComponent,
    data: {
      isLogged: true,
      title: 'Календар'
    },
  },
];

export const EventRoutingModule = RouterModule.forChild(routes);
