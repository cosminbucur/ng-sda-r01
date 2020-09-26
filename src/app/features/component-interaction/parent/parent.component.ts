import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public parentMessage = 'write code every day!';
  public childReply: string;

  constructor() { }

  ngOnInit(): void {
  }

  public parentCatchEvent($event): void {
    console.log('parent catch event');
    this.childReply = $event;
  }
}
