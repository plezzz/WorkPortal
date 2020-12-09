import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin} from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';
import {IHoliday, IHomeOffice, ISick, IUser, IVacation} from '../shared/interfaces';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {
  }

  holidays(): Observable<[IHoliday[], IHoliday[], IHoliday[]]> {
    // holidays(): Observable<IHoliday[]> {
    const year = new Date().getFullYear();
    const lastYear = this.http.get<IHoliday[]>(`holidays?year=${year - 1}`);
    const thisYear = this.http.get<IHoliday[]>(`holidays?year=${year}`);
    const nextYear = this.http.get<IHoliday[]>(`holidays?year=${year + 1}`);
    return forkJoin([lastYear, thisYear, nextYear]);
    // return this.http.get<IHoliday[]>('https://date.nager.at/api/v1/get/bg/2020')
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
}
