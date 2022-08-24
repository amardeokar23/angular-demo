import { Logger } from "./logger.contract";

/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})*/
export class ConsoleLoggerService implements Logger {

  constructor() { }
  write(...args: (string | any)[]) {
    console.log(...args);
  }
}
