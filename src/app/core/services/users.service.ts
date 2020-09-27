import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly USER_API = `${environment.serverUrl}/users`;

  // http client performs http requests
  constructor(private http: HttpClient) { }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_API);
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(this.USER_API + '/' + id);
  }

  public create(user: User): Observable<User> {
    return this.http.post<User>(this.USER_API, user);
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(this.USER_API + '/' + user.id, user);
  }

  public delete(id: number): void {
    this.http.delete<User>(this.USER_API + '/' + id);
  }
}
