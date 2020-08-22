import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PantryDataService {
  items: any = [];

  dataChanged$: Observable<boolean>;

  private dataChangeSubject: Subject<boolean>;

  baseURL = "https://pantry-server-heroku.herokuapp.com";

  constructor(public http: HttpClient) { 
    console.log('Utilizing PantryDataService');

    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  getItems(): Observable<object> {
    return this.http.get(this.baseURL + '/api/pantry').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res:Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    } 
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  removeItem(id) {
    console.log("#### Remove Item - id = ",id);
    this.http.delete(this.baseURL + "/api/pantry" + id).subscribe(res => {
      this.items = res;
      this.dataChangeSubject.next(true);
    });
    //this.items.splice(index,1);
  }

  addItem(item) {
    this.http.post(this.baseURL + "/api/pantry", item).subscribe(res => {
      this.items = res;
      this.dataChangeSubject.next(true);
    }); 
    //this.items.push(item);
  }

  editItem(item, index) {
    console.log("#### Editing Item - id = ",item);
    this.http.put(this.baseURL + "/api/pantry" + item.__id, item).subscribe(res => {
      this.items = res;
      this.dataChangeSubject.next(true);
    });
    //this.items[index]= item;
  }
}
