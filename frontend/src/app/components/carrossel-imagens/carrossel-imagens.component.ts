import { Component, Input, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carrossel-imagens',
  templateUrl: './carrossel-imagens.component.html',
  styleUrls: ['./carrossel-imagens.component.scss']
})
export class CarrosselImagensComponent implements OnInit {
  public carrosselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    point: {
      visible: true,
    },
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    loop: true,
    velocity: 0.2
  };

  @Input()
  public ngDataSource: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
