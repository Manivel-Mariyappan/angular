import { Component, input } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-communication',
  imports: [ChildComponent],
  templateUrl: './communication.component.html',
})
export class CommunicationComponent {

  message = 'This is input message to child';

  getChildMsg(Msg: string) {
    this.message = Msg;
  }

}
