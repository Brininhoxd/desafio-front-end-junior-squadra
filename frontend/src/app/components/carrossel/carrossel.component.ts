import { Component, Input, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit {
  public carrosselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 5, lg: 5, all: 0 },
    slide: 5,
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
  public ngDataSource: any[] = []

  constructor() { }

  ngOnInit() {
    this.ngDataSource = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

}
