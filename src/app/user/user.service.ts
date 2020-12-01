import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {IJob, IRole, IUser} from '../shared/interfaces';
import {catchError, tap} from 'rxjs/operators';

const headers = {
  'Authorization': 'Bearer my-token',
  'My-Custom-Header': 'foobar',
  'Access-Control-Allow-Origin': '*',
  'withCredentials': 'true'
};

const apiURL = environment.apiURL;

@Injectable()
export class UserService {

  currentUser: IUser | null;

  get isLogged(): boolean {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient) {
  }

  getRoles(): Observable<IRole[]> {
    return this.http.get<IRole[]>(`${apiURL}role`, {headers})
  }
  getJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(`${apiURL}job`, {headers})
  }

  login(data: any): Observable<any> {
    return this.http.post(`${apiURL}login`, data, {withCredentials:true}).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }
  logout(): Observable<any> {
    return this.http.post(`${apiURL}logout`, {}, {withCredentials: true}).pipe(
      tap(() => this.currentUser = null)
    );
  }
  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`${apiURL}users/profile`, {withCredentials: true}).pipe(
      tap(((user: IUser) => this.currentUser = user)),
      catchError(() => {
        this.currentUser = null;
        return of(null);
      })
    );
  }



  register(data: any): Observable<any> {
    const body = {title: 'Angular POST Request Example'};
    return this.http.post<any>('http://localhost:3000/register', data, {withCredentials: true}).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
    // return this.http.post(`${apiURL}register`, data, headers).pipe(
    //   tap((user: IUser) => this.currentUser = user)
    // );
  }


  updateProfile(data: any): Observable<IUser> {
    return this.http.put(`${apiURL}users/profile`, data, {withCredentials: true}).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }
}
