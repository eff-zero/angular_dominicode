import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProduct} from '../interfaces/product.interface';
import {updateCart} from "../../../redux/shopping-cart/shopping-cart.actions";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product?: IProduct; // QUITAR

  constructor(private store: Store) { }

  addToCart(): void {
    this.product && this.store.dispatch(new updateCart(this.product));
  }
}
