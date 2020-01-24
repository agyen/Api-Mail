import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }
  private responseLink = 'https://polls-result.herokuapp.com/api/v1/responses';

  recordResponse(result: Response): Observable<any>{
    return this.http.post<any>(this.responseLink, result);
  }
}
