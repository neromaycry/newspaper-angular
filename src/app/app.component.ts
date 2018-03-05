import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from './shared/router-animation/router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [routerTransition]
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
    // this.router.navigate([{ outlets: { body: 'newslist' } }], { skipLocationChange: true });
    // this.router.navigate(['newslist']);
  }

  // getState(outlet) {
  //   return outlet.activatedRouteData.state;
  // }

}
