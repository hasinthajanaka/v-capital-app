import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { Video } from '../models/video';
import { ApiService } from './api.service';
import { map, timeout } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  get(page): Observable<User> {

    const  params = new  HttpParams().set('page', page);

    return this.apiService.get('/user', params)
      .pipe(map(data => data));
  }

  
}
