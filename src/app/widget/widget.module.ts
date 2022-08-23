import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmicalculatorComponent } from './bmicalculator/bmicalculator.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';
import { AppbannerComponent } from './components/appbanner/appbanner.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';



@NgModule({
  declarations: [
    BmicalculatorComponent,
    TimerComponent,
    AppbannerComponent,
    AppfooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AppbannerComponent, AppfooterComponent, BmicalculatorComponent, TimerComponent]
})
export class WidgetModule { }
