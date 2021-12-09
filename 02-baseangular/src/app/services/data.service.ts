import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators'; // accion cuando se recibe algun 
@Injectable({
  providedIn: 'root' //los servicios funcionan de manera global en toda la aplicacion, eso significa root 
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts(){  
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      tap (console.log)
    );
  }
}
