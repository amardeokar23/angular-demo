import { Component, OnInit } from '@angular/core';
import { ConsoleLoggerService } from 'src/app/services/console-logger.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string="";

  constructor(public logger: ConsoleLoggerService) { }

  ngOnInit(): void {
  }

  signup() {
    this.logger.write("Email:", this.email);
  }
}
