import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  			<customheader></customheader>
  			<main></main>
  			<customfooter></customfooter>
  			`,
})
export class AppComponent  { name = 'Angular'; }
