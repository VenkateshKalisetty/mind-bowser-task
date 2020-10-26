import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuth, IManager } from '../shared/models/app.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Service call to login manager
   * @param authData Auth Details
   */
  signin(authData: IAuth): Observable<any> {
    const endpoint = `${environment.apiUrl}/auth/signin`;
    return this.httpClient.post<any>(endpoint, authData);
  }

  /**
   * Service call to create new manager account
   * @param data Manager details
   */
  signup(data: IManager): Observable<boolean> {
    const endpoint = `${environment.apiUrl}/auth/signup`;
    return this.httpClient.post<boolean>(endpoint, data);
  }

  /**
   * Checks whether the user was authenticated in or not
   */
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? true : false;
  }

  /**
   * Returns jwt token from localstorage
   */
  getToken(): string {
    const data = JSON.parse(localStorage.getItem(environment.tokenName));
    return data ? data.jwtToken : null;
  }

  /**
   * Removes token from localstorage
   */
  removeToken(): void {
    localStorage.removeItem(environment.tokenName);
  }

  /**
   * Sets new token into localstorage
   * @param data New token
   */
  setToken(data: any): void {
    localStorage.setItem(environment.tokenName, JSON.stringify(data));
  }
}
