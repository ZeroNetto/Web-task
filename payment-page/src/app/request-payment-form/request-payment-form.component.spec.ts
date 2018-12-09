import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPaymentFormComponent } from './request-payment-form.component';

describe('RequestPaymentFormComponent', () => {
  let component: RequestPaymentFormComponent;
  let fixture: ComponentFixture<RequestPaymentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPaymentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
