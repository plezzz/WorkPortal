import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { forkJoin } from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';
import {IHoliday} from '../shared/interfaces';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {
  }

  holidays(): Observable<[IHoliday[],IHoliday[],IHoliday[]]> {
    const year = new Date().getFullYear();
    const lastYear = this.http.get<IHoliday[]>(`https://date.nager.at/api/v1/get/bg/${year-1}`)
    const thisYear = this.http.get<IHoliday[]>(`https://date.nager.at/api/v1/get/bg/${year}`)
    const nextYear = this.http.get<IHoliday[]>(`https://date.nager.at/api/v1/get/bg/${year+1}`)
    return forkJoin([lastYear, thisYear,nextYear])
    // return this.http.get<IHoliday[]>('https://date.nager.at/api/v1/get/bg/2020')
  }
}
