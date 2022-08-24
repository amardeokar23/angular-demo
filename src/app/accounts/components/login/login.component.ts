import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConsoleLoggerService } from 'src/app/services/console-logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string="";
  password: string="";
  constructor(public logger: ConsoleLoggerService) { }

  ngOnInit(): void {
  }

  login(form:FormGroup) {
    this.logger.write(form);
    this.logger.write("Username:", this.username, "Password:", this.password);
  }

  clear() {
    this.username="";
    this.password="";
  }
}
