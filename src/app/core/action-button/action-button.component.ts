import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

  constructor() { }
  messages=['MessageOne','MessageTwo','MessageThree','MessageFour','MessageFive']
  ngOnInit(): void {
  }
}
