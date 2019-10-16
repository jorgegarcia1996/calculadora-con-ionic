import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display = 0;
  aux = 0;
  state = 'number';
  operator = '+';
  decimal = false;
  decimals = 0;


  constructor() {}

  setNumber(n: number) {
    switch (this.state) {
      case 'number':
        if (this.decimal) {
          this.decimals++;
          this.display = this.display + n * Math.pow(10, -this.decimals);
        } else {
          this.display = this.display * 10 + n;
        }
        break;
      case 'operator':
        this.display = n;
        this.state = 'number';
        break;
      case 'result':
        this.aux = 0;
        this.display = n;
        this.state = 'number';
    }
  }

  setOperator(o: string) {
    // console.log('operator inicio');
    this.calculate();
    this.operator = o;
    this.aux = this.display;
    this.state = 'operator';
  }

  calculate() {
    this.display = eval('' + this.aux + this.operator + '(' + this.display + ')');
    this.aux = 0;
    this.state = 'result';
    this.operator = '+';
    this.decimal = false;
    this.decimals = 0;
  }

  resetAllLast() {
    this.display = 0;
    this.state = 'number';
    this.decimal = false;
    this.decimals = 0;
  }

  resetAll() {
    this.display = 0;
    this.aux = 0;
    this.state = 'number';
    this.operator = '+';
    this.decimal = false;
    this.decimals = 0;
  }

  invert() {
    this.display = this.display * -1;
  }

  setDecimal() {
    this.decimal = true;
  }
}
