import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Frequency} from "../models/frequency.model";

@Injectable({
  providedIn: 'root'
})
export class FrequencyService {
  private baseUrl = 'http://localhost:5087/api';

  constructor(private http: HttpClient) {
  }

  getFrequency(): Observable<Frequency[]> {
    return this.http.get<Frequency[]>(`${this.baseUrl}/Frequency`);
  }
}
