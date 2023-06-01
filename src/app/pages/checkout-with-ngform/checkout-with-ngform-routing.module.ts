import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutWithNgformComponent } from './checkout-with-ngform.component';

const routes: Routes = [{ path: '', component: CheckoutWithNgformComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutWithNgformRoutingModule { }
