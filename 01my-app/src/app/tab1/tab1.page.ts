import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  ngOnInit(){
    let numero = 20;
    debugger; 
    numero =0;
    console.log(numero)
  }
}
