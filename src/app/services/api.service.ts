import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {

    return this.httpClient.get(`${environment.api_url}${path}`,{ params })
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }


}
