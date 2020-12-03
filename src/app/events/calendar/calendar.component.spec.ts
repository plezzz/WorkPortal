import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CalendarComponent} from './calendar.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {registerLocaleData} from '@angular/common';
import localeBG from '@angular/common/locales/bg';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  registerLocaleData(localeBG);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }), FormsModule, BrowserAnimationsModule],
      providers: [NgModule],
      declarations: [CalendarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
