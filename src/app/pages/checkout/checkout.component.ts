import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {stores} from "./mock/stores";
import {IStore} from "./interfaces/checkout.interface";
import {DataService} from "../../shared/services/data.service";
import {filter, take, tap} from "rxjs";
import {OnInit} from "@angular/core";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  stores: IStore[] = [];
  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchStores();
  }

  onPickupOrDelivery(value: boolean) {
    console.log(value)
  }

  formData: FormGroup = this.fb.group({
    name: [undefined, Validators.required],
    city: [undefined, Validators.required],
    shippingAddress: [undefined, Validators.required],
    store: [undefined]
  });

  fetchStores(): void {
    this.dataService.getStores().pipe(take(1))
      .subscribe({
        next: (response: IStore[]): void  => {
          this.stores = response
        }
      })
  }

  submit() {
    console.log(this.formData.getRawValue())
  }
}
