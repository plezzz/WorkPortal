import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {AuthService} from 'src/app/auth/auth.service';
import {IUser} from '../../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../shared/css/form.css']
})
export class HomeComponent implements OnInit {
  isLogged$ = this.authService.isLogged$;
  user$: Observable<IUser> = this.authService.currentUser$;
  isReady$ = this.authService.isReady$;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
