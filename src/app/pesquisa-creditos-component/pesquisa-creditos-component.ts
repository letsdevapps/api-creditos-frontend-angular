import { Component, OnInit } from '@angular/core';
import { PesquisaCreditosService } from '../pesquisa-creditos-service/pesquisa-creditos-service';
import { Credito } from '../../model/credito.model';

@Component({
  selector: 'app-pesquisa-creditos',
  templateUrl: './pesquisa-creditos-component.html',
  styleUrls: ['./pesquisa-creditos-component.css']
})
export class PesquisaCreditosComponent implements OnInit {

  creditos: Credito[] = [];
  numeroNfse: string = '7891011';

  constructor(private minhaApi: PesquisaCreditosService) { }

  ngOnInit(): void {
    this.buscarCreditos();
  }

  buscarCreditos() {
    this.minhaApi.obterCreditosPorNfse(this.numeroNfse).subscribe(
      data => {
        this.creditos = data;
        console.log(this.creditos);
      },
      error => {
        console.error('Erro ao buscar créditos:', error);
      }
    );
  }
}