import { Inject, Injectable } from "@angular/core";
import { Logger } from "./logger.contract";

@Injectable()
export class APILoggerService implements Logger {

    constructor(@Inject("apiAddress") public url: string) { }
    write(...args: (string | any)[]) {
      console.log("API Logger...", this.url, ...args);
    }
  }
  