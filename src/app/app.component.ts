import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  			<customheader></customheader>
  			<router-outlet></router-outlet>
  			<customfooter></customfooter>
  			`,
})
export class AppComponent  { name = 'Angular'; }
