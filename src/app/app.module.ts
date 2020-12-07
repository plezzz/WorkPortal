import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {EventModule} from './events/event.module';
import {UserModule} from './user/user.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from '@angular/common';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    DragDropModule,
    SharedModule,
    CoreModule,
    AuthModule,
    HomeModule,
    UserModule,
    EventModule,
    HttpClientModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
