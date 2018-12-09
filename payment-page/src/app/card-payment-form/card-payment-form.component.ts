import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-payment-form',
  templateUrl: './card-payment-form.component.html',
  styleUrls: ['./card-payment-form.component.css']
})
export class CardPaymentFormComponent implements OnInit {
  CardInfo: FormGroup;
  CardPaymentInfo: FormGroup;
  CardSumbitActive: Boolean;

  constructor() { }

  ngOnInit() {
    this.CardInfo = new FormGroup({
      cardNumber: new FormControl('CardNumber', [
        Validators.required,
        Validators.pattern('^[0-9]{16}')]),
      dateExpired: new FormControl('dayExpired', [
        Validators.required,
        Validators.pattern('^(0[1-9]|1[0-2])/(0[1-9]|[12]\d|3[01])')]),
      cvc: new FormControl('cvc', [
        Validators.required,
        Validators.pattern('^\d{3}')])});

    this.CardPaymentInfo = new FormGroup({
      sum: new FormControl('sum', [
        Validators.required,
        Validators.pattern('^\d{4}|[0-6]\d{4}|7[0-4]\d{3}|75000')
        ]),
      comments: new FormControl('comments', Validators.pattern('.{0, 150}')),
      email: new FormControl('email', [
        Validators.required,
        Validators.email
        ])
    });
    this.CardSumbitActive = false;
  }
}
