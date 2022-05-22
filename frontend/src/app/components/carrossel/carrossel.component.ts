import { Component, Input, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Oferta } from 'src/app/helpers/types';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit {
  public carrosselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 4, lg: 4, all: 0 },
    slide: 4,
    speed: 550,
    point: {
      visible: false
    },
    load: 0,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    loop: true
  };

  @Input()
  public ngDataSource: Oferta[] = []

  constructor() { }

  ngOnInit() {
  }

}
