import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NguCarouselModule } from '@ngu/carousel';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { CardComponent } from './components/card/card.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { OfertaComponent } from './views/oferta/oferta.component';
import { CarrosselImagensComponent } from './components/carrossel-imagens/carrossel-imagens.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarrosselComponent,
    CardComponent,
    AlertModalComponent,
    OfertaComponent,
    CarrosselImagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguCarouselModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
