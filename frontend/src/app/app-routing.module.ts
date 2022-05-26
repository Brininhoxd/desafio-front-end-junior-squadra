import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { OfertaComponent } from './views/oferta/oferta.component';

const routes: Routes = [{
  path: "home",
  component: HomeComponent
}, {
  path: "oferta",
  component: OfertaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
