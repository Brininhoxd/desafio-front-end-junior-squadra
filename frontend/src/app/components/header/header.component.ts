import { OfetasService } from '../../services/ofetas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: OfetasService) { }

  ngOnInit(): void {
  }

  teste() {
    this.service.tratarMenssagem('bbbbbbbbbbbbb', 'bg-danger')
  }
}
