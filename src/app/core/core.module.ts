import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {ActionButtonComponent} from './action-button/action-button.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {appInterceptorProvider} from './app.interceptor';
//import {ErrorHandlerModule} from './errors/errors.module';
//import { ErrorDialogService } from '../shared/errors/error-dialog.service';

@NgModule({
  declarations: [
    NavComponent,
    ActionButtonComponent,
    NotFoundComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatTreeModule,
    RouterModule,
    MatButtonModule,
    //ErrorHandlerModule
  ],
  providers: [
    appInterceptorProvider
  ],
  exports: [NavComponent, ActionButtonComponent, NotFoundComponent]
})
export class CoreModule {
}
