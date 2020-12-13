import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/guards/auth.guard';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [
  {
    path: 'message',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'details/:id',
        component: MessageComponent,
        data: {
          isLogged: true,
          title: 'Съобщение'
        },
      },
      {
        path: 'all',
        component: MessagesComponent,
        data: {
          isLogged: true,
          title: 'Съобщение'
        },
      },
    ]
  }
];

export const MessageRoutingModule = RouterModule.forChild(routes);
