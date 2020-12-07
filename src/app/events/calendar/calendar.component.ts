import {Component, ViewChild, TemplateRef, OnInit,} from '@angular/core';
import {startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours,} from 'date-fns';
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
  locale: string = 'bg';


  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      id: 'dddd',
      color: colors.red,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: `An event with no end date${new Date('Fri Dec 04 2021 12:05:37 GMT+0200 (Eastern European Standard Time)')}`,
      color: colors.yellow,
      id: 'dddd',
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      id: 'dddd',
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      id: 'dddd',
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date('Fri Dec 04 2020 12:05:37 GMT+0200 (Eastern European Standard Time)')),
      end: addDays(new Date('Fri Dec 04 2020 12:05:37 GMT+0200 (Eastern European Standard Time)'), 2),
      title: 'Киро е отпук от 04 до 08.12.2020',
      color: colors.blue,
      allDay: true,
      id: 'dddd',
    },
  ];

  activeDayIsOpen: boolean = true;

  constructor(private eventService: EventService, private router: Router) {

  }

  ngOnInit(): void {
    this.holidaysEvents()
  }

  holidaysEvents(): void {
    this.eventService.holidays().subscribe((holidays) => {
      let allHolydays = holidays[0].concat(holidays[1], holidays[2])
      allHolydays.forEach((holiday: IHoliday) => {
        this.events = [
          ...this.events,
          {
            start: subDays(startOfDay(new Date(holiday.date)), 0),
            title: holiday.localName,
            color: colors.green,
            id: "#",
            allDay: true,
          }
        ];
      })
    })
  }

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0);
      this.viewDate = date;
    }
  }

  eventTimesChanged({event, newStart, newEnd,}: CalendarEventTimesChangedEvent): void {
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
    console.log(event)
    let url = '/events/' + event.id
    this.router.navigate([url])
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
