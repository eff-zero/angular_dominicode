import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {fetchAll} from "../../redux/products/products.actions";
import {IProduct} from "./interfaces/product.interface";
import {ProductsState} from "../../redux/products/products.state";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.productStateSubscription();
  }

  productStateSubscription(): void {
    this.store.dispatch(new fetchAll());
    this.store.select(ProductsState.getProducts)
      .subscribe({
        next: (r: IProduct[]) => {
          if (r) {
            this.products = r;
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
  }
}
