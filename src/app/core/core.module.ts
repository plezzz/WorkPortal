import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {ActionButtonComponent} from './action-button/action-button.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {appInterceptorProvider} from './app.interceptor';
import {NavComponent} from './nav/nav.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
// import {ErrorHandlerModule} from './errors/errors.module';
// import { ErrorDialogService } from '../shared/errors/error-dialog.service';

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
    MatDividerModule,
    MatMenuModule,
    MatBadgeModule,
    // ErrorHandlerModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [
    appInterceptorProvider
  ],
  exports: [NavComponent, ActionButtonComponent, NotFoundComponent]
})
export class CoreModule {
}
