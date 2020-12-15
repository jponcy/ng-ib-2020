import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';

  firstname: string = null;
  // firstname = 'Jean';

  nb = 10_000;

  constructor() {
    // setInterval((function() { this.nb++ }).bind(this), 1_000);
    /* const inter = */
    setInterval(() => this.nb++, 1_000);

    setInterval(() => {
      if (this.firstname) {
        this.firstname = null;
      } else {
        this.firstname = 'Jean';
      }
    }, 2_500);
  }

  msg(): string {
    let result: string = null;

    if (this.firstname) {
      result = this.firstname;
    } else {
      result = ' à tous !';
    }

    return result;
  }
}
