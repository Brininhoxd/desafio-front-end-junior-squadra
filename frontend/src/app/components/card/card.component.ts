import { Component, Input, OnInit } from '@angular/core';

export interface Oferta {
  id: number,
  titulo: string,
  descricaoBreve: string,
  valor: number,
  categoria: { id: number, nome: string },
  detalhes: string[],
  destaques: string[]
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public ngDataSource: any = 0

  constructor() { }

  ngOnInit(): void {
  }

}
