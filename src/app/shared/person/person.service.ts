import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {

  public BASE_URL = '//localhost:8080';
  public PERSON_URL = this.BASE_URL + '/persons';

  constructor(private http: HttpClient) { }

  getAll() : Observable<any> {
    return this.http.get(this.PERSON_URL);
  }

  get(id: string) {
    return this.http.get(this.PERSON_URL + '/' + id);
  }

  save(person: any): Observable<any> {
    let result: Observable<Object>;
    if(person['href']) {
      result = this.http.put(person.href, person);
    } else {
      result = this.http.post(this.PERSON_URL, person);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

}
