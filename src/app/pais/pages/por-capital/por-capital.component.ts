import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CapitalServiceService } from '../../services/capital-service.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  constructor(private capitalService: CapitalServiceService) { }

  ngOnInit(): void {
  }

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    console.log(this.termino);
    this.capitalService.buscarPais(this.termino)
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
  }

}
