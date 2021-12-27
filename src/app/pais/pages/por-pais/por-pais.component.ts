import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencia: boolean = false;

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencia = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe((resp) => {
      console.log(resp);
      this.paises=resp;
    }, (err) => {
      console.info("*** ERROR ****");
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino:string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.paisService.buscarPais(termino)
      .subscribe((paises) => {
        console.log("** Entra aqui");
        this.paisesSugeridos = paises.splice(0,3)
      }, (err) => {
        console.info("*** ERROR ****");
        this.hayError = true;
        this.paisesSugeridos = [];
      });
  }

  buscarSugerencia(termino: string) {
    this.buscar(termino);
    this.mostrarSugerencia = false;
  }

}
