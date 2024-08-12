import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  private formatError(error:any)
  {
    return throwError(() => new Error(error))
  }

  get(path:string, params:HttpParams = new HttpParams()) : Observable<any>{
    return this.http.get(path,{params}).pipe(catchError(this.formatError));
  }
  
}
