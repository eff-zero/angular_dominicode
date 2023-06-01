import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {stores} from "./mock/stores";
import {IStore} from "./interfaces/checkout.interface";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent {
  stores: IStore[] = stores
  constructor(private fb: FormBuilder) {}

  onPickupOrDelivery(value: boolean) {
    console.log(value)
  }

  formData: FormGroup = this.fb.group({
    name: [undefined, Validators.required],
    city: [undefined, Validators.required],
    shippingAddress: [undefined, Validators.required],
    store: [undefined, Validators.required]
  });

  submit() {
    console.log(this.formData.getRawValue())
  }
}
