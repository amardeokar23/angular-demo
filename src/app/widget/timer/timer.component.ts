import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent {

  currentTime:string = "";
  constructor() {
    let today = new Date();
    this.currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  }

  refreshTimer() {
    let today = new Date();
    this.currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  }
}
