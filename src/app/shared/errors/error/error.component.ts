import {Component, Inject, Input, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
 // @Input() message: string;

  constructor(
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)
    public data: { message: string; status?: number ,
    }
  ) {}

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
