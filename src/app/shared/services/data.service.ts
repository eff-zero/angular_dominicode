import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {baseUrl} from "../../app.constants";
import {Observable} from "rxjs";
import {IStore} from "../../pages/checkout/interfaces/checkout.interface";

@Injectable({
  providedIn: 'root',
})

export class DataService {
 constructor(private http: HttpClient) { }

  getStores(): Observable<IStore[]> {
   return this.http.get<IStore[]>(`${baseUrl}/stores`);
  }
}
