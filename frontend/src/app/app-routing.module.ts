import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { HomeComponent } from './views/home/home.component';
import { OfertaComponent } from './views/oferta/oferta.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "oferta",
  component: OfertaComponent
}, {
  path: "checkout",
  component: CheckoutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
