import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import {switchMap, tap} from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

    pais!: Country;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.paisService.getPaisPorCodigo(param['id'])),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais);
    /* this.activatedRoute.params
      .subscribe(({id}) => {
        console.log(id);
        this.paisService.getPaisPorCodigo(id)
          .subscribe(pais => {
            console.log(pais);
          });
      }) */
  }

}
