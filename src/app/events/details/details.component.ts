import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../event.service';
import {IHomeOffice, ISick, IVacation} from '../../shared/interfaces';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: IHomeOffice | IVacation | ISick;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    const id = route.snapshot.params.id;
    const query = this.route.snapshot.queryParams.cat;
    this.eventService.getDetails(id, query).subscribe({
        next: (data) => {
          this.data = data;
        },
        error: (err) => {
          this.router.navigateByUrl('events').then(data => {
            console.log('not', data)
            console.log('not this event')
             this.openSnackBar('Събитието не е намерено', 'X');
          });
          console.log(err);
        }
      }
    );
  }

  ngOnInit(): void {
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
