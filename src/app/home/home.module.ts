import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GuestComponent } from './guest/guest.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {CoreModule} from '../core/core.module';
import { MainComponent } from './main/main.component';
import {AuthModule} from '../auth/auth.module';
import {HomeRoutingModule} from './home-routing.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HomeComponent, GuestComponent, MainComponent],
  exports: [
    GuestComponent,
    HomeComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    AuthModule,
    RouterModule,
    //HomeRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HomeModule { }
