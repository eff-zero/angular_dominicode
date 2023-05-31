import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product?: IProduct
  @Output() addToCartClick = new EventEmitter<IProduct>()

  onClick(): void {
    this.addToCartClick.emit(this.product)
  }
}
