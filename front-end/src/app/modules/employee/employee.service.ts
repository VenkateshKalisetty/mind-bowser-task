import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../shared/models/app.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  endpoint = `${environment.apiUrl}/employee`;

  constructor(private httpClient: HttpClient) {}

  getEmployeesData(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.endpoint);
  }

  addOrUpdateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.httpClient.post<IEmployee>(this.endpoint, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}
