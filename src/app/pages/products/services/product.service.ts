import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL: string = 'http://localhost:3000/products'
  constructor(private http: HttpClient) {
  }
  getProducts(): Observable<any> {
    return this.http.get<Array<IProduct>>(this.apiURL);
  }
}
