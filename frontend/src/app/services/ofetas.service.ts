import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';
import { Oferta } from '../helpers/types';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class OfetasService {

  _baseUrl = "http://localhost:3004/ofertas"
  _toasts: any[] = [];

  constructor(private http: HttpClient, private alertService: AlertService) {

  }

  /**
   * tratarMenssagem
   * 
   * Função para tratamento de alertas
   * 
   * @param menssagem 
   * @param tipo ('success' | 'info' | "warning" | 'danger')
   * 
   */
  public tratarMenssagem(menssagem: string,
    tipo: 'bg-success' | 'bg-info' | "bg-warning" | 'bg-danger' = 'bg-success'): Observable<any> {
    this.alertService.mostrar(menssagem, { classname: `${tipo} text-light` })
    return EMPTY
  }

  /**
   * getOfertas
   * 
   * Requisição de todas as ofertas no db.json
   * 
   */
  public getOfertas(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(this._baseUrl).pipe(
      map((retorno) => retorno),
      catchError(e => this.tratarMenssagem('Ocorreu um erro!'))
    )
  }

  /**
   * getOfertasById
   * 
   * Requisição de oferta pelo Id
   * 
   * @param id 
   * 
   */
  public getOfertasById(id: number): Observable<Oferta> {
    const url = `${this._baseUrl}/${id}`
    return this.http.get<Oferta>(url).pipe(
      map((retorno) => retorno),
      catchError(e => this.tratarMenssagem('Ocorreu um erro!'))
    )
  }

  /**
   * getOfertasByCategoria
   * 
   * Requisição de ofertas separadas pela Categoria
   * 
   * @param codigoCategoria
   * 
   */
  public getOfertasByCategoria(codigoCategoria: number): Observable<Oferta[]> {
    const url = `${this._baseUrl}?categoria.id=${codigoCategoria}`
    return this.http.get<Oferta[]>(url).pipe(
      map((retorno) => retorno),
      catchError(e => this.tratarMenssagem('Ocorreu um erro!'))
    )
  }
}
