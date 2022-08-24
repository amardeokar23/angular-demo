import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';
import { AppbannerComponent } from './components/appbanner/appbanner.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { BMICalculationContainerComponent } from './components/bmi/bmicalculation-container/bmicalculation-container.component';
import { BMICalculatorComponent } from './components/bmi/bmicalculator/bmicalculator.component';
import { BMICalculatorHistoryComponent } from './components/bmi/bmicalculator-history/bmicalculator-history.component';



@NgModule({
  declarations: [
    TimerComponent,
    AppbannerComponent,
    AppfooterComponent,
    BMICalculationContainerComponent,
    BMICalculatorComponent,
    BMICalculatorHistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AppbannerComponent, AppfooterComponent, BMICalculationContainerComponent, BMICalculatorComponent, BMICalculatorHistoryComponent, TimerComponent]
})
export class WidgetModule { }
