import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { ApiService } from './api.service';
import { map, timeout } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private apiService: ApiService) { }

  get(id): Observable<Number> {

    const  params = new  HttpParams().set('userId', id);

    return this.apiService.get('/video', params);

  }

  videocount(userid?: string): any {
    return of(Number).pipe(
      timeout(2000),
      map(c => {
        return 10;
      })
    );
  }
}
