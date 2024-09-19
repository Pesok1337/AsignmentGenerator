import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductGroup } from '../models/product-group.model';
import { ControlType } from '../models/control-type.model';
import { OrgUnit } from '../models/org-unit.model';
import { EventFreq } from '../models/event-freq.model';
import { ControlTaskRecord } from '../models/control-task-record.model';
import { SampleType } from '../models/sample-type.model';

@Injectable({
  providedIn: 'root'
})
export class ControlTaskService {
  private baseUrl = 'http://localhost:5087/api'; // Задай URL бэкенда

  constructor(private http: HttpClient) {}

  getProductGroups(): Observable<ProductGroup[]> {
    return this.http.get<ProductGroup[]>(`${this.baseUrl}/ProductGroup`);
  }

  getControlTypes(): Observable<ControlType[]> {
    return this.http.get<ControlType[]>(`${this.baseUrl}/DigitalSet`);
  }

  getOrgUnits(): Observable<OrgUnit[]> {
    return this.http.get<OrgUnit[]>(`${this.baseUrl}/OrgUnit`);
  }

  getTaskFreqs(): Observable<EventFreq[]> {
    return this.http.get<EventFreq[]>(`${this.baseUrl}/EventFreq`);
  }
  getSampleTypes(): Observable<SampleType[]> {
    return this.http.get<SampleType[]>(`${this.baseUrl}/SampleType`);
  }
  addControlTask(record: ControlTaskRecord): Observable<any> {
    return this.http.post(`${this.baseUrl}/ControlTask`, record); // Поменяй URL на реальный
  }

  updateControlTask(record: ControlTaskRecord): Observable<any> {
    return this.http.put(`${this.baseUrl}/ControlTask/${record.id}`, record); // Заменяй на актуальный URL
  }
}
