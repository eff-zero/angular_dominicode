import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  quantity$ = this._shoppingCartService.quantityAction$
  total$ = this._shoppingCartService.totalAction$
  cart$ = this._shoppingCartService.cartAction$

  constructor(public _shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    
  }
}
