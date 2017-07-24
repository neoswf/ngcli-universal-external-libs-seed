import { Component, Inject } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      // no need to animate anything on load
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),

      // but anytime a route changes let's animate!
      transition('* => *', [
        style({ opacity: 0 }),
        animate('.5s', style({ opacity: 1 }))
      ]),

      // when we go away from the home page to support
      transition('home => about', [
        // ...
      ]),

      // and when we go back home
      transition('about => home', [
        // ...
      ])
    ])
  ]
})
export class AppComponent{
  title = 'app';

  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'firstPage';
  }
}
