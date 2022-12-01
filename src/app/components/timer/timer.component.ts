import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  private timer: any;
  private counter: number = 0;

  constructor() {
    this.timer = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnInit() {}

  getCounter() {
    return this.counter;
  }
}
