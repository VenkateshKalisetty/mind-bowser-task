import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthRoute = true;
  constructor(private route: Router) {
    this.route.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((v: any) => {
        this.isAuthRoute = v.url.includes('auth');
      });
  }
}
