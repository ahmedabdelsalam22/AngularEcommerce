import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions ={
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":"*"
    })
  }
  
  constructor(private http:HttpClient) { }
  
  private formatError(error:any)
  {
    return throwError(() => new Error(error))
  }

  get(path:string, params:HttpParams = new HttpParams()) : Observable<any>{
    return this.http.get(path,{params}).pipe(catchError(this.formatError));
  }
  put(path:string, body:Object ={}):Observable<any>{
    return this.http.put(path,JSON.stringify(body), this.httpOptions).pipe(catchError(this.formatErrors))
  }
  post(path:string, body:Object ={}):Observable<any>{
    return this.http.post(path,JSON.stringify(body), this.httpOptions).pipe(catchError(this.formatErrors))
  }
}
