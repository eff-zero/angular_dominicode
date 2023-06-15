import {Component} from '@angular/core';
import {Select} from "@ngxs/store";
import {ShoppingCartState} from "../../../redux/shopping-cart/shopping-cart.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  @Select(ShoppingCartState.quantity) quantity$!: Observable<number>;
  @Select(ShoppingCartState.total) total$!: Observable<number>;
}
