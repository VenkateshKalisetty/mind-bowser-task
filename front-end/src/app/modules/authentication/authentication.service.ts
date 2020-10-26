import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuth, IManager } from '../shared/models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  signin(authData: IAuth): Observable<any> {
    const endpoint = `${environment.apiUrl}/auth/signin`;
    return this.httpClient.post<any>(endpoint, authData);
  }

  signup(data: IManager): Observable<boolean> {
    const endpoint = `${environment.apiUrl}/auth/signup`;
    return this.httpClient.post<boolean>(endpoint, data);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? true : false;
  }

  getToken(): string {
    const data = JSON.parse(localStorage.getItem(environment.tokenName));
    return data ? data.jwtToken : null;
  }

  removeToken(): void {
    localStorage.removeItem(environment.tokenName);
  }

  setToken(data: any): void {
    localStorage.setItem(environment.tokenName, JSON.stringify(data));
  }

}
