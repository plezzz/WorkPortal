import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin} from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';
import {IHoliday, IHomeOffice, ISick, IVacation} from '../shared/interfaces';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {
  }

  holidays(): Observable<[IHoliday[], IHoliday[], IHoliday[]]> {
    const year = new Date().getFullYear();
    const lastYear = this.http.get<IHoliday[]>(`holidays?year=${year - 1}`);
    const thisYear = this.http.get<IHoliday[]>(`holidays?year=${year}`);
    const nextYear = this.http.get<IHoliday[]>(`holidays?year=${year + 1}`);
    return forkJoin([lastYear, thisYear, nextYear]);
  }

  addEvent(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  workEvents(): Observable<[ISick[], IHomeOffice[], IVacation[]]> {
    const sick = this.http.get<ISick[]>(`sick`);
    const homeOffice = this.http.get<IHomeOffice[]>(`homeOffice`);
    const vacation = this.http.get<IVacation[]>(`vacation`);
    return forkJoin([sick, homeOffice, vacation]);
  }

  getDetails(id, query): Observable<ISick| IHomeOffice | IVacation> {
    return this.http.get<ISick | IHomeOffice | IVacation>(`${query}/${id}`);
  }
}
