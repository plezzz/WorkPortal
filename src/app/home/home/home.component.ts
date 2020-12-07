import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data = this.authService.authenticate();
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

}