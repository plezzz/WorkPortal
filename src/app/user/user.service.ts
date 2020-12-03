import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {IJob, IRole, IUser} from '../shared/interfaces';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable()
export class UserService {

  currentUser: IUser | null;

  get isLogged(): boolean {
    const id = JSON.parse(localStorage.getItem('id'))
    //console.log("User token:"+ token)

    let user = !!this.currentUser
    // console.info('User is logged:' + user)
    return id === this.currentUser?._id;
  }

  constructor(private http: HttpClient) {
  }

  getRoles(): Observable<IRole[]> {
    return this.http.get<IRole[]>(`role`)
  }

  getJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(`job`)
  }

  login(data: any): Observable<any> {
    return this.http.post<IUser>(`login`, data).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('id', JSON.stringify(user._id));
      this.currentUser = user;
      //console.log(user)
      return user;
    }));
  }

  logout(): Observable<any> {
    localStorage.removeItem('id');
    return this.http.post(`logout`, {}).pipe(
      tap(() => {
        return this.currentUser = null
      })
    )
  }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`users/profile`).pipe(
      tap(((user: IUser) => this.currentUser = user)),
      catchError(() => {
        this.currentUser = null;
        return of(null);
      })
    );
  }

  register(data: any): Observable<any> {
    return this.http.post<any>('register', data).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }

  updateProfile(data: any): Observable<IUser> {
    return this.http.put(`profile`, data).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }
}
