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
  categories = [
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
    private snackBar: MatSnackBar,
    private adapter: DateAdapter<any>,
    private userService: UserService,
    private authService: AuthService,
    private eventService: EventService,
  ) {
    this.adapter.getFirstDayOfWeek = () => {
      return 1;
    }
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user: IUser) => {
      this.currentUser$ = user;
    });
    const query = `jobTitle=${this.currentUser$.jobTitle}`;
    this.userService.getUsersQuery(query).subscribe((users) => {
      this.users = users;
    });
  }


  categorySelect(data): void {
    this.hide = (data === 'vacation');
  }


  submitHandler(formData): void {
    this.eventService.addEvent(formData.event + '/create', formData).subscribe({
      next: (data) => {
        this.router.navigateByUrl('/events');
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
