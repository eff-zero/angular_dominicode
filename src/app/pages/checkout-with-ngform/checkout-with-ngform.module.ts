import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckoutWithNgformRoutingModule} from './checkout-with-ngform-routing.module';
import {CheckoutWithNgformComponent} from './checkout-with-ngform.component';
import {MaterialModule} from "../../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CheckoutWithNgformComponent
  ],
  imports: [
    CommonModule,
    CheckoutWithNgformRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckoutWithNgformModule { }
