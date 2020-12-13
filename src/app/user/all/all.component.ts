import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {MessageService} from '../../message/message.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogDeleteComponent} from '../../message/messages/dialog-delete.component';
import {IMessage, IUser} from '../../shared/interfaces';
import {UserService} from '../user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {


  displayedColumns: string[] = ['username', 'fullName', 'dateAdded', 'action'];
  dataSource: MatTableDataSource<IUser>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private authService: AuthService,
    public router: Router,
    private messageService: MessageService,
    public dialog: MatDialog,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {
    this.initializeUsers()
  }

  openDialog(data) {
    this.dialog
      .open(DialogDeleteComponent)
      .afterClosed()
      .subscribe(response => {
        if (response) {
          this.userService.deleteUser(data)
            .subscribe({
              next: () => {
                this.openSnackBar('Потребителят е изтрит успешно', 'X', ['info-snackbar']);
                this.initializeUsers()
              },
              error: (err) => {
                this.openSnackBar(typeof err.error === 'string' ? err.error : err.error.join('\n'), 'X', ['error-snackbar']);
              }
            })
        }
      });
  }

  initializeUsers(): void {
    this.userService.getAllUsers().subscribe((users: IUser[]) => {
      this.dataSource = new MatTableDataSource(users);
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 300)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewUser(data) {
    this.router.navigate(['user', 'details', data])
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
