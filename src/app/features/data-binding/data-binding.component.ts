import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public title = 'this is the title';
  public imageUrl = 'assets/images/code.png';

  constructor() { }

  ngOnInit(): void {
  }

}
