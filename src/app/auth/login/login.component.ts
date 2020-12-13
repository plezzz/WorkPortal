import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../shared/css/form.css']
})
export class LoginComponent {
  // ng
  hide = true;
  isLogged$ = this.authService.isLogged$;
  @ViewChild('f', {static: false}) from: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {
  }

  submitHandler(formData): void {
    this.authService.login(formData).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
        if (returnUrl === 'logout') {
          this.router.navigateByUrl('/');
        }
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        this.openSnackBar(err.error.join('\n'), 'X');
      }
    });
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 9000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['error-snackbar'],
    });
  }
}
