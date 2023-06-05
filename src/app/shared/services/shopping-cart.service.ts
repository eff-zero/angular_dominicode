import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct } from 'src/app/pages/products/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: Array<IProduct> = []

  private cartSubject: Subject<IProduct[]> = new Subject<IProduct[]>();
  private totalSubject: Subject<number> = new Subject<number>();
  private quantitySubject: Subject<number> = new Subject<number>();

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

  private addToCart(product: IProduct): void {
    this.products.push(product)
    this.cartSubject.next(this.products);
  }

  private quantityProducts(): void {
    const quantity: number = this.products.length
    this.quantitySubject.next(quantity)
  }

  private calculateTotal(): void {
    const total: number = this.products.reduce((acc: number, product: IProduct) => acc += product.price, 0)
    this.totalSubject.next(total)
  }
}
