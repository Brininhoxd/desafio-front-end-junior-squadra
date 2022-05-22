import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/helpers/types';
import { OfetasService } from '../../services/ofetas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public ofertasHoteis: Oferta[] = []
  public ofertasGastronomia: Oferta[] = []
  public ofertasEntretenimento: Oferta[] = []

  constructor(private service: OfetasService) { }

  ngOnInit(): void {
    this.service.getOfertasByCategoria(1).subscribe((ofertasHoteis) => {
      this.ofertasHoteis = ofertasHoteis
    })
    this.service.getOfertasByCategoria(2).subscribe((ofertasGastronomia) => {
      this.ofertasGastronomia = ofertasGastronomia
    })
    this.service.getOfertasByCategoria(3).subscribe((ofertasEntretenimento) => {
      this.ofertasEntretenimento = ofertasEntretenimento
    })
  }

}
