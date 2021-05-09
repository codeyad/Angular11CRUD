import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonProfile } from '../helper/interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url='http://localhost:3000/profiles';

  constructor(private http: HttpClient) { }

  create(profile: PersonProfile): Observable<any> {
    return this.http.post(this.url, profile);
  }

  patch(profile: PersonProfile, id: number): Observable<any> {
    return this.http
      .patch(`${this.url}/${id}`, profile);
  }

  get(): Observable<any> {
    return this.http.get(this.url);
  }

  delete(id: number) {
    return this.http
      .delete(`${this.url}/${id}`);
  }

  count(): Observable<any> {
    return this.http.get(`${this.url}/count`);
  }
}
