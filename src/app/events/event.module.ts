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
import {EventService} from './event.service';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    FlexLayoutModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule

  ],
  providers: [
    EventService,
    {provide: MAT_DATE_LOCALE, useValue: 'bg-BG'},
  ]
})
export class EventModule {
}
