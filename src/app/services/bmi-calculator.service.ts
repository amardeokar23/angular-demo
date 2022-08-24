import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Logger } from "./logger.contract";

@Injectable()
export class BMICalculatorService {
  constructor(@Inject("logger") public logger: Logger, public httpClientService: HttpClient) {}

  calculateBMI(weight: number, height: number) : number {
    this.logger.write("service weight: ", weight, "height: ", height);
    let bmi: number = (weight / (height * height));
    return bmi;
  }

  calculateBMIUsingNetworkAPI(weight: number, height: number) {
    this.logger.write("service weight: ", weight, "height: ", height);
    return this.httpClientService.post("http://localhost:3200/bmi/calculate", {
      "weight": weight,
      "height": height
    });
  }
  
}