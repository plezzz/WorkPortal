import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IJob, IUser} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(`job`);
  }

  getUsersQuery(query: string | null = null): Observable<IUser[]> {
    return this.http.get<IUser[]>(`user/allUsersQuery?${query}`);
  }
  getAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(`user/all`);
  }
  getUser(id): Observable<IUser>{
    return this.http.get<IUser>(`user/user/${id}`);
  }
  deleteUser(id): Observable<IUser>{
    return this.http.get<IUser>(`user/delete/${id}`);
  }
}

