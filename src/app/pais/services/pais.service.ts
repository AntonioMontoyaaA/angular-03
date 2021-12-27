import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  private apiUrlv2: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  get httpParams(): HttpParams {
    return new HttpParams()
                      .set('fields', 'name,capital,alpha2Code,flag,population');
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region:string): Observable<Country[]> {
    const url = `${this.apiUrlv2}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

}
