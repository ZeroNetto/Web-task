import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetBankPaymentFormComponent } from './internet-bank-payment-form.component';

describe('InternetBankPaymentFormComponent', () => {
  let component: InternetBankPaymentFormComponent;
  let fixture: ComponentFixture<InternetBankPaymentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetBankPaymentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetBankPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
