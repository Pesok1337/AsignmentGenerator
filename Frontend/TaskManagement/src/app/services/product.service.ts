import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductGroup } from '../models/product-group.model';
import { ControlType } from '../models/control-type.model';
import { OrgUnit } from '../models/org-unit.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:5087/api'; // Замени на правильный URL

  constructor(private http: HttpClient) { }

  // Получение группы продуктов
  getProductGroups(): Observable<ProductGroup[]> {
    return this.http.get<ProductGroup[]>(`${this.baseUrl}/ProductGroup`);
  }

  // Получение вида контроля
  getControlTypes(): Observable<ControlType[]> {
    return this.http.get<ControlType[]>(`${this.baseUrl}/DigitalSet`);
  }

  // Получение вида контроля
  getOrgUnits(): Observable<OrgUnit[]> {
    return this.http.get<OrgUnit[]>(`${this.baseUrl}/OrgUnit`);
  }

  // Добавь другие методы для получения данных
}
