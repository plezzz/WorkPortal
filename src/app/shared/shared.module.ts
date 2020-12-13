import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ErrorComponent} from './error/error.component';
// import {ErrorComponent} from './errors/error/error.component';
// import {ErrorDialogService} from './errors/error-dialog.service';
import {MatButtonModule} from '@angular/material/button';
import {LoadingDialogComponent} from './loading/loading-dialog/loading-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoadingDialogService} from './loading/loading-dialog.service';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WrapTextPipe} from './pipes/wrap-text.pipe';
import { PrettyPrintPipe } from './pipes/pretty-print.pipe';
import { YesNoPipe } from './pipes/yes-no.pipe';

@NgModule({
  declarations: [
    ErrorComponent,
    LoadingDialogComponent,
    WrapTextPipe,
    PrettyPrintPipe,
    YesNoPipe],
    exports: [
        ErrorComponent,
        MatSnackBarModule,
        LoadingDialogComponent,
        PrettyPrintPipe,
        YesNoPipe
    ],
  imports: [
    CommonModule,
      MatDialogModule,
      MatButtonModule,
      MatProgressSpinnerModule
  ],
  providers: [
   // ErrorDialogService,
    LoadingDialogService,
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}}]
})
export class SharedModule {
}
