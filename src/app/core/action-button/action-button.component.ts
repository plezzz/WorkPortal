import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  messages = ['MessageOne', 'MessageTwo', 'MessageThree', 'MessageFour', 'MessageFive']

  ngOnInit(): void {
  }
  logout() {
    this.userService.logout()
    console.log('logout button: '+ this.userService.isLogged)
  }
}
