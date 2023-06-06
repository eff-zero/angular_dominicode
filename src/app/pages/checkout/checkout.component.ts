import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IStore} from "./interfaces/checkout.interface";
import {DataService} from "../../shared/services/data.service";
import { Subscription} from "rxjs";
import {OnInit} from "@angular/core";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  stores: IStore[] = [];
  isDelivery: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.fetchStores();
  }

  formData: FormGroup = this.fb.group({
    name: [undefined, Validators.required],
    city: [undefined],
    shippingAddress: [undefined],
    store: [undefined]
  });

  onPickupOrDelivery(value: boolean): void {
    this.isDelivery = value;
  }

  private fetchStores(): void {
    const httpSubscription: Subscription = this.dataService.getStores()
      .subscribe({
        next: (response: IStore[]): void => {
          this.stores = response
        }
      });

    this.subscriptions.push(httpSubscription);
  }

  submit(): void {
    console.log(this.formData.getRawValue())
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
