import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BmiItemModel } from 'src/app/widget/model/bmiitem.model';

@Component({
  selector: 'bmicalculator-history',
  templateUrl: './bmicalculator-history.component.html',
  styleUrls: ['./bmicalculator-history.component.css']
})
export class BMICalculatorHistoryComponent implements OnInit {

  constructor() {}
  @Input()
  bmiResultData = new BmiItemModel(0, 0, 0);
  bmiResultHistory: Array<any> = [];

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    /*
    if (!changes['bmiResultData'].firstChange) {
      this.bmiResultHistory.push(this.bmiResultData);
    }*/
  }

}
