import { Component } from '@angular/core';
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service";
import {Observable} from "rxjs";
import {IProduct} from "../../products/interfaces/product.interface";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  cart$: Observable<IProduct[]> = this.shoppingCartService.cartAction$;
  total$: Observable<number> = this.shoppingCartService.totalAction$;
  quantity$: Observable<number> = this.shoppingCartService.quantityAction$;

  constructor(private shoppingCartService: ShoppingCartService) { }
}
