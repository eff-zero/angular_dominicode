import {Component} from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  quantity$: Observable<number> = this.shoppingCartService.quantityAction$
  total$: Observable<number> = this.shoppingCartService.totalAction$
  // cart$: Observable<IProduct[]> = this.shoppingCartService.cartAction$

  constructor(private shoppingCartService: ShoppingCartService) { }

}
