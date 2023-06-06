import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "../../app.constants";
import {Observable} from "rxjs";
import {IStore} from "../interfaces/store.interface";
import {IOrderDetail, IOrder, IDetails} from "../interfaces/order.interface";

@Injectable({
  providedIn: 'root',
})

export class DataService {
 constructor(private http: HttpClient) { }

  getStores(): Observable<IStore[]> {
   return this.http.get<IStore[]>(`${BASE_URL}/stores`);
  }

  saveOrder(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(`${BASE_URL}/orders`, order);
  }

  saveOrderDetail(orderDetail: { orderId: number; details: IDetails[] }): Observable<IOrderDetail> {
    return this.http.post<IOrderDetail>(`${BASE_URL}/detailsOrders`, orderDetail);
  }
}
