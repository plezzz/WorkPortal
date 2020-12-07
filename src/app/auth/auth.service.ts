import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUser} from '../shared/interfaces';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  private currentUser: BehaviorSubject<IUser | null> = new BehaviorSubject(undefined);
  currentUser$ = this.currentUser.asObservable();
  isLogged$ = this.currentUser$.pipe(map(user => !!user));
  isReady$ = this.currentUser$.pipe(map(user => user !== undefined));

  constructor(private http: HttpClient) {
  }

  login(data: any): Observable<any> {
    return this.http.post(`login`, data).pipe(
      tap((user: IUser) => this.currentUser.next(user))
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`register`, data).pipe(
      tap((user: IUser) => this.currentUser.next(user))
    );
  }

  logout(): Observable<any> {
    return this.http.post(`logout`, {}).pipe(
      tap((user: IUser) => this.currentUser.next(null))
    );
  }

  authenticate(): Observable<any> {
    return this.http.get(`user/details`).pipe(
      tap((user: IUser) => this.currentUser.next(user)),
      catchError(() => {
        this.currentUser.next(null);
        return [null];
      })
    );
  }
}
