import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadowdom',
  imports: [],
  template: `
  <p class="h2">shadowdom works!</p>
  `,
  styles: `
    .h2{ 
      font-size: 10px;
    }
`,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowdomComponent {

}
