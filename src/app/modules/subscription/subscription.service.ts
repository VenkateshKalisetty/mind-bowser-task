import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private httpClient: HttpClient) {}

  getMonthlySubscription(): Observable<any> {
    const endpoint = ``;
    return this.httpClient.get<any>(endpoint);
  }
}
