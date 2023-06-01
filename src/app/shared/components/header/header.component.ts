import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public _shoppingCartService: ShoppingCartService, private router: Router) { }

  goToCheckout(): void {
    this.router.navigate(['/checkout']).then();
  }

  ngOnInit(): void {

  }
}
