import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <h1>Hola Counter</h1>

    <h3>Contador: {{ counter }}</h3>
    <button (click)="increseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increseBy(-1)">-1</button>

  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }


  public counter:number = 10;


  increseBy( value:number ){
    this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }

}
