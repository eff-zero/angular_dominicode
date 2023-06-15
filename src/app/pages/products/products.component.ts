import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {fetchAll} from "../../redux/products/products.actions";
import {IProduct} from "./interfaces/product.interface";
import {ProductsState} from "../../redux/products/products.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Select(ProductsState.products) products$!: Observable<IProduct[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.store.dispatch(new fetchAll());
  }
}
