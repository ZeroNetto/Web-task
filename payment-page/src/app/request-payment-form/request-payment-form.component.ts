import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-request-payment-form',
  templateUrl: './request-payment-form.component.html',
  styleUrls: ['./request-payment-form.component.css']
})
export class RequestPaymentFormComponent implements OnInit {
  RequestPaymentInfo: FormGroup;
  RequestSumbitActive: Boolean;

  constructor() { }

  ngOnInit() {
    this.RequestPaymentInfo = new FormGroup({
      toINN: new FormControl('fromINN', [
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
        Validators.pattern('^\d{4}|[1-6]\d{4}|7[0-4]\d{3}|75000')]),
      telephoneNumber: new FormControl('telephoneNumber', [
        Validators.required,
        Validators.pattern('^[+]?(7|8)9\d{9}$')]),
        email: new FormControl('email', [
          Validators.required,
          Validators.email
          ])
      });
      this.RequestSumbitActive = false;
  }
}
