import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user: IUser;
  constructor(private authService: AuthService) {
     this.authService.currentUser$.subscribe(user => this.user = user)
  }

  ngOnInit(): void {
  }

}
