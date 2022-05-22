import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NguCarouselModule } from '@ngu/carousel';

import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarrosselComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
