import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../interfaces/product.interface";
import {baseUrl} from "../../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }
  getProducts(): Observable<any> {
    return this.http.get<IProduct[]>(`${baseUrl}/products`);
  }
}
