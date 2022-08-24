import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';

import { AppComponent } from './app.component';
import { WidgetModule } from './widget/widget.module';
import { FormsModule } from '@angular/forms';
import { ConsoleLoggerService } from './services/console-logger.service';
import { BMICalculatorService } from './services/bmi-calculator.service';
import { APILoggerService } from './services/api-logger.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetModule,
    AccountsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {useClass: ConsoleLoggerService, provide: ConsoleLoggerService},
    {useClass: APILoggerService, provide: "logger"},
    {useValue: "http://localhost", provide: "apiAddress"},
    {useClass: BMICalculatorService, provide: BMICalculatorService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
