import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  first = "";
  second = "";
  display = "";

  myChange1(e: any) {
    this.first = e.target.value;
  }
  myChange2(e: any) {
    this.second = e.target.value;
  }
  myChange3(e: any) {
    this.display = e.target.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
