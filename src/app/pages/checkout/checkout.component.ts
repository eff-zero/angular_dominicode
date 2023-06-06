import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IStore} from "../../shared/interfaces/store.interface";
import {DataService} from "../../shared/services/data.service";
import {delay, Subscription, switchMap, take, tap} from "rxjs";
import {OnInit} from "@angular/core";
import {IDetails, IOrder, IOrderDetail} from "../../shared/interfaces/order.interface";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {IProduct} from "../products/interfaces/product.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit, OnDestroy {
  cart: IProduct[] = [];
  subscriptions: Subscription[] = [];
  stores: IStore[] = [];
  isDelivery: boolean = true;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {
    this.checkIfCartIsEmpty();
  }

  ngOnInit(): void {
    this.fetchStores();
    this.getDataCart();
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

  onSubmit(): void {
    const order: IOrder = this.prepareOrder();

    const subscriptionSaveOrder: Subscription = this.dataService.saveOrder(order)
      .pipe(
        switchMap(({id: orderId}) => {
          const details: IDetails[] = this.prepareDetails();
          return this.dataService.saveOrderDetail({orderId, details});
        }),
        tap(() => this.router.navigate(['checkout/thank-you-page'])),
        tap(() => this.shoppingCartService.clearCart())
      ).subscribe();

    this.subscriptions.push(subscriptionSaveOrder);
  }

  private prepareOrder(): IOrder {
    const data = structuredClone(this.formData.value);
    const pickup: boolean = !this.isDelivery

    if (pickup) {
      const idStore = data.store.id;
      delete data.store;
      return {
        ...data,
        isDelivery: pickup,
        idStore, date: new Date().toLocaleDateString()
      }
    }

    return {
      ...data,
      date: new Date().toLocaleDateString(),
      isDelivery: this.isDelivery,
    }
  }

  private prepareDetails(): IDetails[] {
    const details: IDetails[] = [];
    this.cart.forEach((product: IProduct): void => {
      const {id: productId, name: productName, quantity} = product
      details.push({productId, productName, quantity});
    })
    return details
  }

  private getDataCart(): void {
    const getCartSubscription: Subscription = this.shoppingCartService.cartAction$
      .subscribe({
        next: (products: IProduct[]) => this.cart = products
      });

    this.subscriptions.push(getCartSubscription);
  }

  private checkIfCartIsEmpty(): void {
    const checkCartSubscription: Subscription = this.shoppingCartService.cartAction$
      .pipe(tap(
        (products: IProduct[]): void => {
          if (Array.isArray(products) && !products.length) {
            this.router.navigate(['/products']).then();
          }
        }
      ))
      .subscribe()

    this.subscriptions.push(checkCartSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
