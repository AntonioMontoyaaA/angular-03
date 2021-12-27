import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;

  activarRegion(region:string) {
    this.hayError = false;
    this.regionActiva = region;
    this.paisService.buscarRegion(region)
    .subscribe((resp) => {
      console.log(resp);
      this.paises=resp;
    }, (err) => {
      console.info("*** ERROR ****");
      this.hayError = true;
      this.paises = [];
    });
  }

  getClaseCss(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

}
