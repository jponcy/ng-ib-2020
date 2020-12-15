import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
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
