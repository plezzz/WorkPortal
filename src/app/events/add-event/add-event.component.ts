import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ViewChild} from '@angular/core';
import {DateAdapter} from '@angular/material/core';
import {UserService} from 'src/app/user/user.service';
import {IUser} from 'src/app/shared/interfaces';
import {AuthService} from 'src/app/auth/auth.service';
import {EventService} from '../event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css', '../../shared/css/form.css']
})
export class AddEventComponent implements OnInit {
  hide = false;
  users: IUser[];
  currentUser$;
  categorys = [
    {
      value: 'vacation',
      text: 'Отпуск'
    },
    {
      value: 'homeOffice',
      text: 'Работа от вкъщи'
    },
    {
      value: 'sick',
      text: 'Болничен'
    }
  ];
  @ViewChild('f', {static: false}) from: NgForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar,
    // tslint:disable-next-line:variable-name
    private _adapter: DateAdapter<any>,
    private userService: UserService,
    private authService: AuthService,
    private eventService: EventService,
  ) {
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user: IUser) => {
      this.currentUser$ = user;
    });
    const query = `jobTitle=${this.currentUser$.jobTitle}`;
    console.log(query);
    this.userService.getUsersQuery(query).subscribe((users) => {
      this.users = users;
    });
  }


  categorySelect(data): void {
    this.hide = (data === 'vacation');
  }


  submitHandler(formData): void {
    console.log('formData:', formData);
    this.eventService.addEvent(formData.event + '/create', formData).subscribe({
      next: (data) => {
        console.log('this is data', data);
        const returnUrl = this.route.snapshot.queryParams.return || '/';
        // console.log(returnUrl);
        this.router.navigateByUrl('/events/add-event');
      },
      error: (err) => {
        this.openSnackBar(err.error.join('\n'), 'X');
        // console.log('in login component err')
        console.log(err);
      }
    });
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 9000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['error-snackbar'],
    });
  }

}
