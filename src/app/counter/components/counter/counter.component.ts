import { Component } from "@angular/core";

@Component(
  {
    selector: 'app-counter',
    template: `

      <h3>Counter: {{ counter }}</h3>

      <button (click)="increaseBy()">+1</button>
      <button (click)="resetCounter()">Reset</button>
      <button (click)="decreaseBy()">-1</button>

    `,
  }
)
export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  public increaseBy(): void {
    this.counter += 1;
  }

  public decreaseBy(): void {
    this.counter -= 1;
  }

  public resetCounter(): void {
    this.counter = 10;
  }

}

