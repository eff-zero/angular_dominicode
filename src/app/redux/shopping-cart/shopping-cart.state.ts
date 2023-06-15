import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {ClearCart, updateCart} from './shopping-cart.actions';
import {IProduct} from "../../pages/products/interfaces/product.interface";

export class ShoppingCartStateModel {
  quantity: number = 0;
  total: number = 0;
  products: IProduct[] = [];
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

  @Selector()
  static quantity(state: ShoppingCartStateModel) {
    return state.quantity
  }

  @Selector()
  static total(state: ShoppingCartStateModel) {
    return state.total
  }

  @Action(updateCart)
  updateCart(ctx: StateContext<ShoppingCartStateModel>, action: updateCart): void {
    const { payload } = action
    this.addToCart(ctx, payload);
    this.calculateQuantityProducts(ctx);
    this.calculateTotal(ctx);
  }

  @Action(ClearCart)
  clearCart({setState}: StateContext<ShoppingCartStateModel>) {
    setState({
      products: [],
      total: 0,
      quantity: 0
    });
  }

  private addToCart({getState, patchState}: StateContext<ShoppingCartStateModel>, payload: IProduct): void {
    const {products} = getState();
    const productInCart: IProduct | undefined = products.find((product: IProduct): boolean => product.id === payload.id);

    if (productInCart) {
      productInCart.quantity += 1
      patchState({products: [...products]})
    } else {
      const newProduct: IProduct = {...payload, quantity: 1}
      patchState({products: [...products, newProduct]})
    }
  }

  private calculateQuantityProducts({getState, patchState}: StateContext<ShoppingCartStateModel>): void {
    const {products} = getState();
    const quantity: number = products.reduce((acc: number, product: IProduct) => acc + product.quantity, 0);
    patchState({quantity})
  }

  private calculateTotal({getState, patchState}: StateContext<ShoppingCartStateModel>): void {
    const {products} = getState()
    const total = products.reduce((acc: number, product: IProduct) => acc + product.price * product.quantity, 0);
    patchState({total})
  }
}
