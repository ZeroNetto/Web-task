import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-payment-form',
  templateUrl: './card-payment-form.component.html',
  styleUrls: ['./card-payment-form.component.css']
})
export class CardPaymentFormComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public SaveOnDatabase(request){
    console.log(request);
    alert("aha");
  }

  public CheckValidation(fieldName){
      const field = document.getElementById(fieldName);
      console.log(field);
  }

  public ChangeSubmitState(){
    const submitField = document.getElementById('submit') as any;
    const cardNumber = document.getElementById('cardNumber') as any;
    const dateExpired = document.getElementById('dateExpired') as any;
    const cvc = document.getElementById('cvc') as any;
    const sum = document.getElementById('sum') as any;
    const comments = document.getElementById('comments') as any;
    const email = document.getElementById('email') as any;

    if(cardNumber.checkValidity() &&
       dateExpired.checkValidity() &&
       cvc.checkValidity() &&
       sum.checkValidity() &&
       comments.checkValidity() &&
       email.checkValidity()){
        submitField.disabled = false;
       } else{
        submitField.disabled = true;
       }
  }
}
