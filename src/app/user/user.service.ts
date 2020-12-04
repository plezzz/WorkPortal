import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {IJob, IRole, IUser} from '../shared/interfaces';
import {catchError, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class UserService {

  currentUser: IUser | null;
   isLoggedUser = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.isLoggedUser.asObservable();
  }

  get isLogged(): boolean {
    const id = JSON.parse(localStorage.getItem('id'))
    // console.log(id)
    // console.log(this.currentUser)
    //console.log("User token:"+ token)

    let user = !!this.currentUser
    // console.info('User is logged:' + user)
    return !!id
  }

  constructor(private http: HttpClient, private router: Router) {
  }

  getRoles(): Observable<IRole[]> {
    return this.http.get<IRole[]>(`role`)
  }

  getJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(`job`)
  }

  login(data: any): Observable<any> {
    // Call this._isLoggedIn.next(true) or this._isLoggedIn.next(false) depending on the result
    return this.http.post<IUser>(`login`, data)
      .pipe(
        tap((user: IUser) => {
          !!user._id?this.isLoggedUser.next(true):this.isLoggedUser.next(false)
          this.currentUser = user
          return user
        })
      );
    //   .pipe(
    //   map(user => {
    //   // store user details and jwt token in local storage to keep user logged in between page refreshes
    //   this.currentUser = user;
    //   //console.log(user)
    //   return user;
    // })
    // );
  }

  logout(): Observable<any> {
    localStorage.removeItem('id');
    this.currentUser = null
    return this.http.post(`logout`, {})
      .pipe(
        map(user =>{
          console.warn('here in logout map')
          console.log(user)
        }),
        tap(() => {
          console.warn('here in logout tap')
          return this.currentUser = null
        })
      )
  }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`users/profile`).pipe(
      tap(((user: IUser) => this.currentUser = user)),
      catchError(() => {
        //this.currentUser = null;
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
