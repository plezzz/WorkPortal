import {Component, ViewChild, TemplateRef, OnInit} from '@angular/core';
import {startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours} from 'date-fns';
import {Subject} from 'rxjs';

import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  DAYS_OF_WEEK,
} from 'angular-calendar';
import {DateFormatter} from '../date-formater';
import {EventService} from '../event.service';
import {IHoliday} from '../../shared/interfaces';
import {Router} from '@angular/router';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
  green: {
    primary: '#55e308',
    secondary: '#f8edbc',
  },
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: DateFormatter,
    }]
})

export class CalendarComponent implements OnInit {
  weekStartsOn = DAYS_OF_WEEK.MONDAY;
  locale = 'bg';


  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen = true;

  constructor(private eventService: EventService, private router: Router) {

  }

  ngOnInit(): void {
    this.holidaysEvents();
    this.workEvents();
  }

  holidaysEvents(): void {
    this.eventService.holidays().subscribe((holidays) => {
      const allHolidays = holidays[0].concat(holidays[1], holidays[2]);
      allHolidays.forEach((holiday: IHoliday) => {
        this.events = [
          ...this.events,
          {
            start: subDays(startOfDay(new Date(holiday.date)), 0),
            title: holiday.localName,
            color: colors.green,
            id: JSON.stringify({id: 'holiday', category: 3}),
            allDay: true,
          }
        ];
      });
    });
  }

  workEvents(): void {
    this.eventService.workEvents().subscribe((allEvents) => {
        let counter = 0;
        let colorType;
        let text;
        let cat;
        allEvents.forEach((events) => {
          if (counter === 0) {
            colorType = colors.red;
            text = `e болничен`;
            cat = 'sick';
          } else if (counter === 1) {
            colorType = colors.yellow;
            text = `работи от вкъщи`;
            cat = 'homeOffice';
          } else {
            colorType = colors.blue;
            text = `е отпуск`;
            cat = 'vacation';
          }
          events.forEach((event) => {
            const fromDate: any = new Date(event.from);
            const toDate: any = new Date(event.to);
            this.events = [
              ...this.events,
              {
                start: subDays(startOfDay(fromDate), 0),
                end: addDays(fromDate, event.days),
                title: `${event.createdBy.firstName} ${text} от ${this.normalizeDate(fromDate)} до ${this.normalizeDate(toDate)}`,
                color: colorType,
                id: JSON.stringify({id: event._id, category: cat}),
                allDay: true,
              }];
          });
          counter++;
        });
      }
    );
  }


  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0);
      this.viewDate = date;
    }
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    const {id, category} = JSON.parse(event.id as string);
    const path = category !== 3 ? `${id}?cat=${category}` : '';
    const url = '/events/' + path;
    this.router.navigateByUrl(url);
  }

  setView(view: CalendarView): void {
    this.view = view;
  }

  closeOpenMonthViewDay(): void {
    this.activeDayIsOpen = false;
  }

  normalizeDate(Date: Date): string {
    return `${Date.getDate()}.${Date.getMonth() + 1}.${Date.getFullYear()}`;
  }
}

