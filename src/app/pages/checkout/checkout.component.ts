import { Component } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";


interface IRoot {
  name: string;
  store: string;
  shippingAddress: string;

}
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private fb: FormBuilder) {}

  formCheckout = this.fb.group({
    name: [''],
  });

  get name() {
    return this.formCheckout.get('name') as FormControl
  }
}
