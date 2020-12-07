import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../shared/css/login-register.css']
})
export class LoginComponent implements OnInit {
  // ng
  hide = true;
  isLogged$ = this.authService.isLogged$;
  @ViewChild('f', {static: false}) from: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router, private route: ActivatedRoute,
    // private errorHandler:ErrorHandlerModule
  ) {
  }

  ngOnInit(): void {

  }

  submitHandler(formData): void {
    this.authService.login(formData).subscribe({
      next: (data) => {
       // console.log('this is data', data);
        const returnUrl = this.route.snapshot.queryParams.return || '/';
        //console.log(returnUrl);
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        // console.log('in login component err')
        console.log(err);
      }
    });
  }
}
