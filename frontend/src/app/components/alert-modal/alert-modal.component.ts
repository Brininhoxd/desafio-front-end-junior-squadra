import { AlertService } from './../../services/alert.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
  host: { 'class': 'toast-container position-fixed top-0 end-0 p-3', 'style': 'z-index: 1200' }
})
export class AlertModalComponent implements OnInit {

  // @Input()
  // public dados: {
  //   menssagem: string,
  //   tipo: 'success' | 'info' | "warning" | 'danger'
  // } = { menssagem: 'AAAAAAAAAAAAAAAA', tipo: 'success' }

  constructor(public alertService: AlertService) { }

  ngOnInit(): void {
  }

}
