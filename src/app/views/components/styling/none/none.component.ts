import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none',
  imports: [],
  template: `<p class="h2">none works!</p>`,
  styles: `
  .h2 {
    color: Orange;
    font-size: 30px;
  }
`,
  encapsulation: ViewEncapsulation.None
})
export class NoneComponent {

}
