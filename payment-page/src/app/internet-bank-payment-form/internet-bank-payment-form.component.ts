import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-internet-bank-payment-form',
  templateUrl: './internet-bank-payment-form.component.html',
  styleUrls: ['./internet-bank-payment-form.component.css']
})
export class InternetBankPaymentFormComponent implements OnInit {
  PaymentInfo: FormGroup;
  SumbitActive: Boolean;

  constructor() { }

  ngOnInit() {
    this.PaymentInfo = new FormGroup({
      fromINN: new FormControl('fromINN', [
        Validators.required,
        Validators.pattern('^\d{10}|\d{12}')]),
      BIK: new FormControl('BIK', [
        Validators.required,
        Validators.pattern('\d{9}')]),
      accountNumber: new FormControl('accountNumber', [
        Validators.required,
        Validators.pattern('^\d{20}')]),
      VAT: new FormControl('VAT', Validators.required),
      forWhat: new FormControl('forWhat', Validators.required),
      count: new FormControl('count', [
        Validators.required,
        Validators.pattern('^\d{4}|[1-6]\d{4}|7[0-4]\d{3}|75000')])
      });
      this.SumbitActive = false;
  }
}
