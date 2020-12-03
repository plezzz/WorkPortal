import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav/nav.component';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {ActionButtonComponent} from './action-button/action-button.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {appInterceptorProvider} from './app.interceptor';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [NavComponent, ActionButtonComponent, NotfoundComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatTreeModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [
    AuthGuard,
    appInterceptorProvider
  ],
  exports: [NavComponent, ActionButtonComponent, NotfoundComponent]
})
export class CoreModule {
}
