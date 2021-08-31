import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about', //selector que debemos poner en app.component
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
