import { Component } from '@angular/core';

interface IForm {
  name?: string;
  store?: string;
  shippingAddress?: string;
  city?: string;
}
@Component({
  selector: 'app-checkout-with-ngform',
  templateUrl: './checkout-with-ngform.component.html',
  styleUrls: ['./checkout-with-ngform.component.css']
})
export class CheckoutWithNgformComponent {

  model: IForm = {
    city: undefined,
    name: undefined,
    store: undefined,
    shippingAddress: undefined
  }

  stores = [
    {
      "id": 1,
      "name": "Park Row at Beekman St",
      "address": "38 Park Row",
      "city": "New York",
      "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
    },
    {
      "id": 2,
      "name": "Store Alcalá",
      "address": "Calle de Alcalá, 21",
      "city": "Madrid",
      "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
    },
    {
      "id": 3,
      "name": "Chambers and West Broadway",
      "address": "125 Chambers Street",
      "city": "New York",
      "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
    },
    {
      "id": 4,
      "name": "Covent Garden - Russell St",
      "address": "10 Russell Street",
      "city": "London",
      "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
    },
    {
      "id": 5,
      "name": "Monmouth St",
      "address": "11 Monmouth Street",
      "city": "London",
      "openingHours": "10:00 - 14:00 and 17:00 - 20:30"
    }
  ]

  onPickupOrDelivery(value: boolean): void {
    console.log(value)
  }
}

