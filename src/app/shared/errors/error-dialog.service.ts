import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ErrorComponent} from "./error/error.component";

@Injectable()
export class ErrorDialogService {
  private opened = false;

  constructor(private dialog: MatDialog) {
  }

  openDialog(message: string, status?: number|string): void {
    if (!this.opened) {
      this.opened = true;
      const dialogRef = this.dialog.open(ErrorComponent, {
        data: {message, status},
        maxHeight: "40%",
        maxWidth: "100%",
        position: {
          top: '5%',
          right: '1%',

        },
        disableClose: true,
        hasBackdrop: false
      });

      setTimeout(() => {
        dialogRef.close();
      }, 3000)

      dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }
}
