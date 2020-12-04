import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

  constructor(private userService: UserService,
  private router: Router) {
  }

  messages = ['MessageOne', 'MessageTwo', 'MessageThree', 'MessageFour', 'MessageFive']

  ngOnInit(): void {
  }
  logout() {
    this.userService.logout()
    this.router.navigateByUrl('/user/login')
    //   .then(() => {
    //   window.location.reload();
    // });
  }
}
