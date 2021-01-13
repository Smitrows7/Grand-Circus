import { Component, OnInit } from '@angular/core';

interface Pet{
name:string;
breed:string;
}

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {
  
  pet:Pet = { name:"Alto",
  breed:"Maltese"}

  constructor() { }

  ngOnInit(): void {
  }

}
