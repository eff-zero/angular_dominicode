import {Component} from "@angular/core";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {Observable} from "rxjs";
import {IProduct} from "../../../pages/products/interfaces/product.interface";

@Component({
  selector: 'app-cart',
  template:
    `
      <ng-container *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart">
        <ng-container *ngIf="dataCart.total">
          <mat-icon>add_shopping_cart</mat-icon>
          {{ dataCart.total | currency }}
          ({{ dataCart.quantity }})
        </ng-container>
      </ng-container>
    `,
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  quantity$: Observable<number> = this.shoppingCartService.quantityAction$
  total$: Observable<number> = this.shoppingCartService.totalAction$
  // cart$: Observable<IProduct[]> = this.shoppingCartService.cartAction$

  constructor(private shoppingCartService: ShoppingCartService) { }

}
