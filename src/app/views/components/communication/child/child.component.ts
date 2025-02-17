import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {

  message = input('This is default input message');
  clickEvent = output<string>()

  ngOnInit(): void {
    console.log(this.message());
  }

  handleClickEvent() {
    this.clickEvent.emit('This is Message from child');
  }


}
