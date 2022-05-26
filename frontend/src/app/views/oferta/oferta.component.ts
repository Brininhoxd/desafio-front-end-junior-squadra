import { Oferta, ParametrosUrl } from './../../helpers/types';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfetasService } from 'src/app/services/ofetas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit {
  _idOferta: string = ''
  ofertaSelecionada: Oferta = {} as Oferta
  imagens: string[] = []
  detalhe: string = ''

  constructor(private service: OfetasService, public injector: Injector) { }

  ngOnInit(): void {
    this.getParametrosUrl()
  }

  getParametrosUrl() {
    const parametrosUrl = this.service.getParametrosUrl(this.injector.get(ActivatedRoute))

    if (parametrosUrl) {
      this.service.getOfertasById(parseInt(parametrosUrl.params.idOferta)).subscribe((oferta) => {
        this.ofertaSelecionada = oferta
        this.imagens = this.ofertaSelecionada.imgs
        this.detalhe = this.ofertaSelecionada.detalhes[0]
      })

    }
  }

  abrirCheckOut() {
    const parametrosUrl: ParametrosUrl = { nomeParametro: 'idOferta', valor: this.ofertaSelecionada.id }
    this.service.abrirNovaTela('checkout', [parametrosUrl])
  }

}
