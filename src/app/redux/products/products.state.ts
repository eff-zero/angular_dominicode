import { Injectable } from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {fetchAll} from './products.actions';
import {IProduct} from "../../pages/products/interfaces/product.interface";
import {ProductService} from "../../pages/products/services/product.service";
import {tap} from "rxjs";

interface ProductsStateModel {
  products: IProduct[]
}

const defaults: ProductsStateModel = {
  products: []
};

export const StateProduct = 'products';

@State<ProductsStateModel>({
  name: StateProduct,
  defaults
})

@Injectable()
export class ProductsState {

  @Selector()
  static products(state: ProductsStateModel): IProduct[] {
    return state.products;
  }

  constructor(private productService: ProductService) { }

  @Action(fetchAll)
  fetchAll(ctx: StateContext<ProductsStateModel>) {
    return this.productService.getProducts()
      .pipe(tap((products: IProduct[]) => ctx.setState({products})));
  }
}
