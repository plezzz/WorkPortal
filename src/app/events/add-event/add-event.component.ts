import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ViewChild} from '@angular/core';
import {DateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css', '../../shared/css/form.css']
})
export class AddEventComponent implements OnInit {
  playerName;
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
  ]
  @ViewChild('f', {static: false}) from: NgForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _adapter: DateAdapter<any>
  ) {
  }

  ngOnInit(): void {

  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  categorySelect(data){
    console.log(data,this.playerName)
  }
  bulgarian() {
    this._adapter.setLocale('bg');
  }

  submitHandler(formData): void {
    console.log('formData:', formData)
    // this.authService.login(formData).subscribe({
    //   next: (data) => {
    //     // console.log('this is data', data);
    //     const returnUrl = this.route.snapshot.queryParams.return || '/';
    //     //console.log(returnUrl);
    //     this.router.navigateByUrl(returnUrl);
    //   },
    //   error: (err) => {
    //     this.openSnackBar(err.error.join('\n'), 'X')
    //     // console.log('in login component err')
    //     console.log(err);
    //   }
    // });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 9000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['error-snackbar'],
    });
  }

}
