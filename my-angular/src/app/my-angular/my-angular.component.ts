import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-angular',
  templateUrl: './my-angular.component.html',
  styleUrls: ['./my-angular.component.css']
})
export class MyAngularComponent implements OnInit {
  noun :string = " COVID 19 Year...";
  adverb:string = "greatfully";
  hideTitle:boolean = false;

  red: string = 'red-color';
  blue:string = 'blue-color';
  green:string = 'green-color';

  classList: object = {
    red: this.red,
    blue: this.blue,
    green: this.green
  };

  
  constructor() { }

  ngOnInit(): void {
  }

}
