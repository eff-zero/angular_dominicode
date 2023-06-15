import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {ProductComponent} from './product/product.component';
import {MaterialModule} from "../../material.module";
import {NgxsModule} from "@ngxs/store";
import {ProductsState} from "../../redux/products/products.state";

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ProductsRoutingModule,
    NgxsModule.forFeature([ProductsState])
  ]
})
export class ProductsModule { }
