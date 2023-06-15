import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../products/interfaces/product.interface";
import {Select} from "@ngxs/store";
import {ShoppingCartState} from "../../../redux/shopping-cart/shopping-cart.state";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Select(ShoppingCartState.cart) cart$!: Observable<IProduct[]>;
  @Select(ShoppingCartState.total) total$!: Observable<number>;
  @Select(ShoppingCartState.quantity) quantity$!: Observable<number>;
}
