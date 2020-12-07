import { Component } from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WorkPortal2';
  isLogged$ = this.authService.isLogged$;
  isReady$ = this.authService.isReady$;

  constructor(private authService: AuthService) {
  }
}
