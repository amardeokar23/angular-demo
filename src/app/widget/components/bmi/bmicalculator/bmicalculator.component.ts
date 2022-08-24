import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConsoleLoggerService } from 'src/app/services/console-logger.service';
import { BmiItemModel } from 'src/app/widget/model/bmiitem.model';

@Component({
  selector: 'bmicalculator',
  templateUrl: './bmicalculator.component.html',
  styleUrls: ['./bmicalculator.component.css']
})
export class BMICalculatorComponent implements OnInit {

  ngOnInit(): void {
  }

  bmiIndex: number = 0;
  weight: number = 0;
  height: number = 0;

  @Output()
  resultCalculated = new EventEmitter<BmiItemModel>();

  constructor(public logger: ConsoleLoggerService) { }

  setWeight(weight: string) {
    this.weight = parseFloat(weight);
  }

  calculateBMI() {
    this.logger.write("component weight: ", this.weight, "height: ", this.height);
    //this.bmiIndex = (this.weight / (this.height * this.height));
    this.resultCalculated.emit(
      //new BmiItemModel(this.weight, this.height, this.bmiIndex)
      new BmiItemModel(this.weight, this.height, 0)
    );
  }

  clear() {
    this.weight = 0;
    this.height = 0;
  }
}
