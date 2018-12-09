import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CardPaymentFormComponent } from './card-payment-form/card-payment-form.component';
import { InternetBankPaymentFormComponent } from './internet-bank-payment-form/internet-bank-payment-form.component';
import { RequestPaymentFormComponent } from './request-payment-form/request-payment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
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
@Component({
      selector: 'paymentPage',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
  })
export class AppModule { }
