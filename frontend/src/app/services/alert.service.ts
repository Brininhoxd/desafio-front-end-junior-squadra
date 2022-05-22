import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  alerts: any[] = [];

  public mostrar(menssagem: string, opcoes: any = {}) {
    this.alerts.push({ menssagem, ...opcoes });
  }

  public retirar(alerts: any) {
    this.alerts = this.alerts.filter(t => t !== alerts);
  }

}
