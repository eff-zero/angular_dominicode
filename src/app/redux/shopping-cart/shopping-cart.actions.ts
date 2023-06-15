import {IProduct} from "../../pages/products/interfaces/product.interface";

export class updateCart {
  static readonly type = '[ShoppingCart] Update Cart';

  constructor(public payload: IProduct) { }
}

export class ClearCart {
  static readonly type = '[ShoppingCart] Clear Cart';
}
