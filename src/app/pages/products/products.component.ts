import { Component, OnInit } from '@angular/core';
import {ProductService} from "./services/product.service";
import {tap} from "rxjs";
import {IProduct} from "./interfaces/product.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products?: Array<IProduct> = []
  constructor(private _productServices: ProductService) {
  }
  ngOnInit(): void {
    this._productServices.getProducts().pipe(tap(
      (response: Array<IProduct>) => this.products = response
    )).subscribe()
  }
}
