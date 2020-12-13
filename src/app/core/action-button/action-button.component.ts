import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MessageService} from 'src/app/message/message.service';
import {IMessage} from 'src/app/shared/interfaces';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements AfterViewInit {
  count = 0;
  unreadMessages = [];
  hidden = false;

  constructor(private authService: AuthService,
              public router: Router,
              private messageService: MessageService) {


  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.getUnreadMessages()
      }
    });
  }

  logout(): void {
    this.unreadMessages = []
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/home');
    });
  }

  getUnreadMessages(): void {
    this.authService.currentUser$.subscribe(user => {
      if (user !== undefined && user !== null) {
        this.messageService.getAll(user.messageReceived, false).subscribe(data => {
          console.log(data)
          this.unreadMessages = data;
          this.count =data.length
          if (this.count === 0) {
            this.hidden = true;
          }
        })

      }
    })
  }

  readMessage(data) {
    this.messageService.readMessage(data._id).subscribe(() => {
      this.router.navigate(['message', 'details', data._id])
    })
  }
}
