import { Component, ViewEncapsulation } from '@angular/core';
import { EmulatedComponent } from './emulated/emulated.component';
import { NoneComponent } from './none/none.component';
import { ShadowdomComponent } from './shadowdom/shadowdom.component';

@Component({
  selector: 'app-styling',
  imports: [EmulatedComponent, NoneComponent, ShadowdomComponent],
  template: `
      <h1 class="h2">This is styling component</h1>

      <app-emulated></app-emulated>

      <app-none></app-none>

      <app-shadowdom></app-shadowdom>
  `,
})
export class StylingComponent {

}
