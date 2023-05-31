import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct } from 'src/app/pages/products/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: Array<IProduct> = []

  private cartSubject = new Subject<IProduct[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();

  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  get cartAction$(): Observable<IProduct[]> {
    return this.cartSubject.asObservable();
  }

  public updateCart(product: IProduct): void {
    this.addToCart(product);
    this.calculateTotal();
    this.quantityProducts();
  }

  private addToCart(product: IProduct) {
    this.products.push(product)
    this.cartSubject.next(this.products);
  }

  private quantityProducts(): void {
    const quantity = this.products.length
    this.quantitySubject.next(quantity)
  }

  private calculateTotal(): void {
    const total = this.products.reduce((acc, product) => acc += product.price, 0)
    this.totalSubject.next(total)
  }
}
