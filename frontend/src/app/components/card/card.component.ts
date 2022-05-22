import { Component, Input, OnInit } from '@angular/core';
import { Oferta } from 'src/app/helpers/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public ngDataSource: Oferta = {} as Oferta

  constructor() { }

  ngOnInit(): void {
  }

}
