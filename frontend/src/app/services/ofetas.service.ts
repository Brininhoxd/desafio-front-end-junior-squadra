import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';
import { Oferta, ParametrosUrl } from '../helpers/types';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class OfetasService {

  private readonly BASE_URL = "http://localhost:3004/ofertas"

  constructor(private http: HttpClient,
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  /**
   * abrirNovaTela
   * 
   * Função para abrir outras telas, passando parametros pela url ou não
   * 
   * @param url tela que sera aberta 
   * @param parametros array com os parametros da url
   * 
   */
  public abrirNovaTela(url: string, parametros?: ParametrosUrl[]): void {
    if (parametros?.length) {
      let aux: any = {}
      parametros.forEach(parametro => {
        aux[parametro.nomeParametro] = parametro.valor
      });

      this.router.navigate([`/${url}`], { queryParams: { ...aux } });
    }
  }

  /**
   * abrirNovaTela
   * 
   * Função para abrir outras telas, passando parametros pela url ou não
   * 
   * @param url tela que sera aberta 
   * @param parametros array com os parametros da url
   * 
  */
  //  public injector: Injector,
  public getParametrosUrl(route: ActivatedRoute): any {
    let aux
    route.queryParamMap.subscribe((params) => {
      aux = { ...params.keys, ...params };
    })
    return aux
  }

  parseUrlParams(params: string): any {
    let retorno: any = {};
    let parametro: string[];
    let campo: string[];

    if (params.indexOf("(") == 0) {
      params = params.slice(1);
    }

    if (params.indexOf(")") == params.length - 1) {
      params = params.slice(0, -1);
    }

    parametro = params.split("|");
    if (parametro) {
      for (var x = 0; x < parametro.length; x++) {
        if (parametro[x]) {
          campo = parametro[x].split("=");

          if (campo.length = 2) {
            retorno[campo[0]] = campo[1]
          }
        }
      }
    }

    return retorno;
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
    return this.http.get<Oferta[]>(this.BASE_URL).pipe(
      map((retorno) => retorno),
      catchError(e => this.tratarMenssagem('Ocorreu um erro!', 'bg-danger'))
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
    const url = `${this.BASE_URL}/${id}`
    return this.http.get<Oferta>(url).pipe(
      map((retorno) => retorno),
      catchError(e => this.tratarMenssagem('Ocorreu um erro!', 'bg-danger'))
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
    const url = `${this.BASE_URL}?categoria.id=${codigoCategoria}`
    return this.http.get<Oferta[]>(url).pipe(
      map((retorno) => retorno),
      catchError(e => this.tratarMenssagem('Ocorreu um erro!', 'bg-danger'))
    )
  }
}
