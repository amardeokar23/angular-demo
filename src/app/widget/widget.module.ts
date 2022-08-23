import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmicalculatorComponent } from './bmicalculator/bmicalculator.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BmicalculatorComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BmicalculatorComponent, TimerComponent]
})
export class WidgetModule { }
