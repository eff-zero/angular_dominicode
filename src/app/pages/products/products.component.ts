import { Component, OnInit } from '@angular/core';
import { ProductService } from "./services/product.service";
import {take} from "rxjs";
import { IProduct } from "./interfaces/product.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<IProduct> = []

  constructor(
    private productServices: ProductService,
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productServices.getProducts().pipe(take(1)).subscribe({
      next: (response: IProduct[]) => this.products = response
    })
  }
}
