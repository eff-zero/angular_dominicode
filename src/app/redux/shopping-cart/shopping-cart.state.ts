import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';
import {AddToCart, ClearCart} from './shopping-cart.actions';
import {IProduct} from "../../pages/products/interfaces/product.interface";

interface ShoppingCartStateModel {
  quantity: number;
  total: number;
  products: IProduct[];
}

const defaults: ShoppingCartStateModel = {
  quantity: 0,
  total: 0,
  products: []
};

@State<ShoppingCartStateModel>({
  name: 'shoppingCart',
  defaults
})

@Injectable()
export class ShoppingCartState {
  @Action(AddToCart)
  addToCart({setState}: StateContext<ShoppingCartStateModel>) {
    setState({
      products: [],
      total: 9,
      quantity: 9
    });
  }

  @Action(ClearCart)
  clearCart({setState}: StateContext<ShoppingCartStateModel>) {
    setState({
      products: [],
      total: 0,
      quantity: 0
    });
  }

  private calculateQuantityProducts({getState}: StateContext<ShoppingCartStateModel>): void {
    const state: ShoppingCartStateModel = getState();
  }


}
