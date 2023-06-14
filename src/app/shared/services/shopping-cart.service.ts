import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { IProduct } from 'src/app/pages/products/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: IProduct[] = []

  private cartSubject: BehaviorSubject<IProduct[]>  = new BehaviorSubject<IProduct[]>([]);
  private totalSubject: BehaviorSubject<number>  = new BehaviorSubject<number>(0);
  private quantitySubject: BehaviorSubject<number>  = new BehaviorSubject<number>(0);

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

  public clearCart() {
    this.cartSubject.next([]);
    this.totalSubject.next(0);
    this.quantitySubject.next(0);
    this.products = [];
  }

  private addToCart(product: IProduct): void {
    const productInCart: IProduct | undefined = this.products.find((item: IProduct): boolean => item.id === product.id);
    productInCart ? productInCart.quantity += 1 : this.products.push({...product, quantity: 1});
    this.cartSubject.next(this.products);
  }

  private quantityProducts(): void {
    const quantity: number = this.products.reduce((acc: number, product: IProduct) => acc + product.quantity, 0);
    this.quantitySubject.next(quantity);
  }

  private calculateTotal(): void {
    const total: number = this.products.reduce((acc: number, product: IProduct) => acc + (product.price * product.quantity), 0);
    this.totalSubject.next(total);
  }
}
