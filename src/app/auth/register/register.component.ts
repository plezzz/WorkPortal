import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../user/user.service';
import {IJob} from '../../shared/interfaces/';
import {AuthService} from '../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../shared/css/form.css']
})
export class RegisterComponent implements OnInit {
  isLoading = true;
  user = this.authService.currentUser$;
  hide = true;
  usernameHelp: boolean;
  jobs: IJob[];
  @ViewChild('f', {static: false}) from: NgForm;

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private _snackBar: MatSnackBar
  ) {
    this.usernameHelp = false;
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.userService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      this.isLoading = false;
    });
  }

  submitHandler(formData): void {
    if (formData.isLead === '') {
      formData.isLead = false;
    }
    if (formData.isSupport === '') {
      formData.isSupport = false;
    }
    if (formData.isAdmin === '') {
      formData.isAdmin = false;
    }
    this.authService.register(formData).subscribe({
      next: (data) => {
        this.openSnackBar(data.message + 'Потребителско име: ' + data.user.username, 'X', ['info-snackbar']);
        this.router.navigate(['auth', 'register']);
      },
      error: (err) => {
        this.openSnackBar(typeof err.error === 'string' ? err.error : err.error.join('\n'), 'X', ['error-snackbar']);
      }
    });
  }

  openSnackBar(message: string, action: string, classes: string[]): void {
    this._snackBar.open(message, action, {
      duration: 9000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: classes,
    });
  }
}
