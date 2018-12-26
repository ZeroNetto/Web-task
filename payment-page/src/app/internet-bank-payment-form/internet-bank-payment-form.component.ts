import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-internet-bank-payment-form',
  templateUrl: './internet-bank-payment-form.component.html',
  styleUrls: ['./internet-bank-payment-form.component.css']
})
export class InternetBankPaymentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  public ChangeSubmitState(){
    const submitField = document.getElementById('submit') as any;
    const inn = document.getElementById('INN') as any;
    const bik = document.getElementById('BIK') as any;
    const accountNumber = document.getElementById('accountNumber') as any;
    const forWhat = document.getElementById('forWhat') as any;
    const sum = document.getElementById('sum') as any;

    if(inn.checkValidity() &&
       bik.checkValidity() &&
       accountNumber.checkValidity() &&
       forWhat.checkValidity() &&
       sum.checkValidity()){
        submitField.disabled = false;
       } else{
        submitField.disabled = true;
       }
  }

  public GetFile(){

  }
}
