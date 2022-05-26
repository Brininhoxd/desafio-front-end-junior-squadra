import { Component, Input, OnInit } from '@angular/core';
import { Oferta, ParametrosUrl } from 'src/app/helpers/types';
import { OfetasService } from 'src/app/services/ofetas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public ngDataSource: Oferta = {} as Oferta

  constructor(private service: OfetasService) { }

  ngOnInit(): void {
  }

  abrirOferta() {
    if (this.ngDataSource.id) {
      let aux: ParametrosUrl = { nomeParametro: 'idOferta', valor: this.ngDataSource.id }
      this.service.abrirNovaTela('oferta', [aux])
    } else {
      this.service.tratarMenssagem('Ocorreu um erro!', 'bg-danger')
    }
  }

}
