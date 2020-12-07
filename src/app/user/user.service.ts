import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IJob} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(`job`);
  }
}
