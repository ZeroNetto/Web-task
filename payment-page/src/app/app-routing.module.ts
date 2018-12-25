import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardPaymentFormComponent } from './card-payment-form/card-payment-form.component';
import { InternetBankPaymentFormComponent } from './internet-bank-payment-form/internet-bank-payment-form.component';
import { RequestPaymentFormComponent } from './request-payment-form/request-payment-form.component';

const routes: Routes = [
  {
    path: "card-payment",
    component: CardPaymentFormComponent
  },
  {
    path: "internet-bank-payment",
    component: InternetBankPaymentFormComponent
  },
  {
    path: "request-payment",
    component: RequestPaymentFormComponent
  },
  {
    path: "",
    redirectTo: "/card-payment-form",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
