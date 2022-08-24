import { Component, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { BMICalculatorService } from 'src/app/services/bmi-calculator.service';
import { Logger } from 'src/app/services/logger.contract';
import { BmiItemModel } from 'src/app/widget/model/bmiitem.model';
import { BMICalculatorHistoryComponent } from '../bmicalculator-history/bmicalculator-history.component';

@Component({
  selector: 'app-bmicalculation-container',
  templateUrl: './bmicalculation-container.component.html',
  styleUrls: ['./bmicalculation-container.component.css']
})
export class BMICalculationContainerComponent implements OnInit {

  constructor(public bmiCalculatorService: BMICalculatorService, @Inject("logger") public logger: Logger) {
    // To use "this" operator inside subscribe callbacks.
    // Other wise need to use arrow operator & inline function.
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.onCompletion = this.onCompletion.bind(this);
  }

  bmiData?: BmiItemModel = new BmiItemModel(0, 0, 0);
  @ViewChild("bmiHistoryViewChild")
  bmiHistoryViewChild?: BMICalculatorHistoryComponent

  ngOnInit(): void {}

  onBmiresultCalculated(data: BmiItemModel) {
    //this.bmiData = data;
    //data.bmi = this.bmiCalculatorService.calculateBMI(data.weight, data.height);
    //this.bmiCalculatorService.calculateBMIUsingNetworkAPI(data.weight, data.height).subscribe(this.onSuccess, this.onFailure, this.onCompletion);
    this.bmiCalculatorService.calculateBMIUsingNetworkAPI(data.weight, data.height).subscribe(
      (res:any) => {
        this.logger.write("OnSuccess", res);
      },
      (err:any) => {
        this.logger.write("OnFailure", err);
      },
      () => {
        this.logger.write("OnCompletion");
      }
    );
    //this.bmiHistoryViewChild?.bmiResultHistory.push(data);
  }

  onSuccess(res: any) {
    this.logger.write("OnSuccess", res);
  }

  onFailure(err: any) {
    this.logger.write("OnFailure", err);
  }

  onCompletion() {
    this.logger.write("OnCompletion");
  }
}
