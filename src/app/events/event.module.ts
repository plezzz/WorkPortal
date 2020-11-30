import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {CalendarComponent} from './calendar/calendar.component';
import {EventRoutingModule} from './event-routing.module';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {AddEventComponent} from './add-event/add-event.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import localeBG from '@angular/common/locales/bg';

registerLocaleData(localeBG);

@NgModule({
  declarations: [CalendarComponent, AddEventComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule

  ]
})
export class EventModule {
}
