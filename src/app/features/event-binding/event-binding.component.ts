import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  public clickCount = 0;

  constructor() { }

  ngOnInit(): void {
  }


  public onSave($event): void {
    console.log('save button clicked', $event);
    this.clickCount++;
  }

  public onDivClick(): void {
    console.log('div clicked');
  }
}
