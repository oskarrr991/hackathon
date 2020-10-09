import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }

  private requestUrl = 'https://0efc7d859e5e.ngrok.io/api/core';

  getTestString(): Observable<User> {
    return this.http.get<User>(this.requestUrl);
  }
}
