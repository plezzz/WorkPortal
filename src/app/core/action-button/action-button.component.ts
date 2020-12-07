import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

  constructor(private authService: AuthService,
  private router: Router) {
  }

  messages = ['MessageOne', 'MessageTwo', 'MessageThree', 'MessageFour', 'MessageFive']

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout().subscribe(e => console.log)
    this.router.navigateByUrl('/user/login')
  }
}
