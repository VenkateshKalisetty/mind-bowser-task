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

  /**
   * Getting all employees under logged in manager
   */
  getEmployeesData(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.endpoint);
  }

  /**
   * Add or Update employee details
   * @param employee Employee data
   */
  addOrUpdateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.httpClient.post<IEmployee>(this.endpoint, employee);
  }

  /**
   * Delete employee under manager
   * @param id Employee Id
   */
  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}
