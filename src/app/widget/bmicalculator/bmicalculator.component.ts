import { Component } from '@angular/core';

@Component({
  selector: 'app-bmicalculator',
  templateUrl: './bmicalculator.component.html',
  styleUrls: ['./bmicalculator.component.css']
})
export class BmicalculatorComponent {

  bmiIndex: number = 0;
  weight: number = 0;
  height: number = 0;

  constructor() { }

  calculateBMI() {
    this.bmiIndex = (this.weight / (this.height * this.height));
  }
}
