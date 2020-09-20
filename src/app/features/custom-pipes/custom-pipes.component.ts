import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {

  public myNumber = 3;
  public message = 'angular is easy!';

  constructor() { }

  ngOnInit(): void {
  }

}
