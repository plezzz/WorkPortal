import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin} from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';
import {IHoliday} from '../shared/interfaces';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class EventService {
  headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET')
    .append('Access-Control-Allow-Origin', 'https://date.nager.at');


  constructor(private http: HttpClient) {
  }

  //holidays(): Observable<[IHoliday[],IHoliday[],IHoliday[]]> {
  holidays(): Observable<IHoliday[]> {
    // const year = new Date().getFullYear();
    // const lastYear = this.http.get<IHoliday[]>(`https://date.nager.at/api/v1/get/bg/${year-1}`)
    // const thisYear = this.http.get<IHoliday[]>(`https://date.nager.at/api/v1/get/bg/${year}`,{withCredentials: true, headers:this.headers})
    // const nextYear = this.http.get<IHoliday[]>(`https://date.nager.at/api/v1/get/bg/${year+1}`)
    // return forkJoin([lastYear, thisYear,nextYear])
    return this.http.get<IHoliday[]>('https://date.nager.at/api/v1/get/bg/2020', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': 'https://date.nager.at',
      }
    })
  }
}
