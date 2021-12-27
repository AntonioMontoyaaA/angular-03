import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalServiceService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  get httpParams(): HttpParams {
    return new HttpParams()
                      .set('fields', 'name,capital,alpha2Code,flag,population');
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
