import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {IUser} from 'src/app/shared/interfaces';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isLogged$ = this.authService.isLogged$;
  isReady$ = this.authService.isReady$;
  user: IUser;
  title = 'WorkPortal';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService
  ) {
    this.authService.currentUser$.subscribe(user => {
        this.user = user
      }
    )
  }

  ngOnInit(): void {

  }

}
