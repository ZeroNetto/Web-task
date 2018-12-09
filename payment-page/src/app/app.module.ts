import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { CardPaymentFormComponent } from './card-payment-form/card-payment-form.component';
import { InternetBankPaymentFormComponent } from './internet-bank-payment-form/internet-bank-payment-form.component';
import { RequestPaymentFormComponent } from './request-payment-form/request-payment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    PaymentFormComponent,
    CardPaymentFormComponent,
    InternetBankPaymentFormComponent,
    RequestPaymentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
