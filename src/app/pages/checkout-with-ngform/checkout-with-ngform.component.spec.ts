import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutWithNgformComponent } from './checkout-with-ngform.component';

describe('CheckoutWithNgformComponent', () => {
  let component: CheckoutWithNgformComponent;
  let fixture: ComponentFixture<CheckoutWithNgformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutWithNgformComponent]
    });
    fixture = TestBed.createComponent(CheckoutWithNgformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
