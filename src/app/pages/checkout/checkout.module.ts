import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import {MaterialModule} from "../../material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
