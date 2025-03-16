import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  constructor(private http: HttpClient) { }

  fetchSeats(): Observable<any> {
    return this.http.get<boolean[]>('http://localhost:5201/api/busdata/get-bus-data/');
  }
}
