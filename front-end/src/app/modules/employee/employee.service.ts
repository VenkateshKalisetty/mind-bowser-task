import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../shared/models/app.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  getEmployeesData(id: number): Observable<IEmployee[]> {
    const endpoint = ``;
    return this.httpClient.get<IEmployee[]>(endpoint);
  }

  addEmployee(employee: IEmployee): Observable<IEmployee> {
    const endpoint = ``;
    return this.httpClient.post<IEmployee>(endpoint, employee);
  }

  updateEmployee(employee: IEmployee): Observable<any> {
    const endpoint = ``;
    return this.httpClient.post(endpoint, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    const endpoint = ``;
    return this.httpClient.delete(endpoint);
  }
}
