import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5087/api/Task'; // Update with your API URL

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }
  //getAllTask(task: any): Observable<any> {
  //  return this.http.get("http://localhost:5087/api/tasks");
  //}
  createTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  updateTaskFrequency(id: string, frequency: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/frequency`, { frequency });
  }

  getProductGroups(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/product-groups`);
  }

  getControlPoints(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/control-points`);
  }
}