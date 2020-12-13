import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {MessageService} from '../../message/message.service';
import {MatDialog} from '@angular/material/dialog';
import {IMessage} from '../../shared/interfaces';

@Component({
  selector: 'dialog-delete',
  templateUrl: 'dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent {
  displayedColumns: string[] = ['date', 'sender', 'title', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private authService: AuthService,
    public router: Router,
    private messageService: MessageService,
    public dialog: MatDialog
  ) {
    authService.currentUser$.subscribe(user => {
      let messages = [];
      user.messageReceived.forEach(message => {
        messages.push(createNewMessage(message))
      })
      this.dataSource = new MatTableDataSource(messages);
    })
  }

  openDialog() {
    let dialog = this.dialog
      .open(DialogDeleteComponent)
      .afterClosed()
      .subscribe(response => {
        console.log(response);
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  readMessage(data) {
    this.messageService.readMessage(data).subscribe(() => {
      this.router.navigate(['message', 'details', data])
    })
  }
}

/** Builds and returns a new User. */
function createNewMessage(message: IMessage): any {
  return {
    date: message.createdAt,
    title: message.title,
    sender: message.createdBy.firstName + ' ' + message.createdBy.lastName,
    id: message._id
  };
}
