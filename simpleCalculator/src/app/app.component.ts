import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  num1!: number;
  num2!: number;
  result!: number;

  addition() {
    this.result = Number(this.num1) + Number(this.num2);
  }

  subtraction() {
    this.result = Number(this.num1) - Number(this.num2);
  }

  multiplication() {
    this.result = Number(this.num1) * Number(this.num2);
  }
  division() {
    this.result = Number(this.num1) / Number(this.num2);
  }

}
