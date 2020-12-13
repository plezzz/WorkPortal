import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMessage} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {
  }

  readMessage(id): Observable<any> {
    return this.http.post(`message/update/${id}`, id)
  }

  getMessage(id): Observable<IMessage> {
    return this.http.get<IMessage>(`message/details/${id}`)
  }

  getAll(data: [], param: boolean | null): Observable<IMessage[]> {
    return this.http.post<IMessage[]>(`message/getAll`, {ids: data, isRead: param})
  }
}
