import { Component, OnInit } from '@angular/core';
import { ProductService } from "./services/product.service";
import {take} from "rxjs";
import { IProduct } from "./interfaces/product.interface";
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import {Store} from "@ngxs/store";
import {AddToCart} from "../../redux/shopping-cart/shopping-cart.actions";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products?: Array<IProduct> = []

  constructor(
    private productServices: ProductService,
    private shoppingCartService: ShoppingCartService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  addToCart(product: IProduct): void {
    this.store.dispatch(new AddToCart())
  }

  fetchProducts(): void {
    this.productServices.getProducts().pipe(take(1)).subscribe({
      next: (response: IProduct[]) => this.products = response
    })
  }
}
