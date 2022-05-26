import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from 'src/app/helpers/types';
import { OfetasService } from 'src/app/services/ofetas.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private service: OfetasService, public injector: Injector, private formBuilder: FormBuilder) { }

  oferta: Oferta = {} as Oferta

  formulario: FormGroup = this.formBuilder.group({
    numero: [null, Validators.required],
    nomeImpresso: [null, Validators.required],
    validade: [null, Validators.required],
    codigoDeSeguranca: [null, Validators.required],
  })
  valoresFormulario: any[] = []

  mascaraNumeroCartao: string = '0000 0000 0000 0000'
  mascaraValidadeCartao: string = '00/00'
  mascaraCodigoSegurancaCartao: string = '000'

  quantidade: number = 0

  ngOnInit(): void {
    this.getParametrosUrl()
  }

  getParametrosUrl() {
    const parametrosUrl = this.service.getParametrosUrl(this.injector.get(ActivatedRoute))

    if (parametrosUrl) {
      this.service.getOfertasById(parseInt(parametrosUrl.params.idOferta)).subscribe((oferta) => {
        this.oferta = oferta
        this.quantidade = (this.oferta) ? +1 : 0
      })

    }
  }

  comprar() {
    this.valoresFormulario = this.service.enviarFormulario(this.formulario.value)
  }

}
