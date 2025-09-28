//import { Component, OnInit } from '@angular/core';
//import { PesquisaCreditosService } from '../pesquisa-creditos-service/pesquisa-creditos-service';
//import { Credito } from '../../model/credito.model';
//
//@Component({
//  selector: 'app-pesquisa-creditos',
//  templateUrl: './pesquisa-creditos-component.html',
//  styleUrls: ['./pesquisa-creditos-component.css']
//})
//export class PesquisaCreditosComponent implements OnInit {
//
//  creditos: Credito[] = [];
//  numeroNfse: string = '7891011';
//
//  constructor(private minhaApi: PesquisaCreditosService) { }
//
//  ngOnInit(): void {
//    this.buscarCreditos();
//  }
//
//  buscarCreditos() {
//    this.minhaApi.obterCreditosPorNfse(this.numeroNfse).subscribe(
//      data => {
//        this.creditos = data;
//        console.log(this.creditos);
//      },
//      error => {
//        console.error('Erro ao buscar créditos:', error);
//      }
//    );
//  }
//}

//import { Component, OnInit } from '@angular/core';
//import { PesquisaCreditosService } from '../pesquisa-creditos-service/pesquisa-creditos-service';
//import { Credito } from '../../model/credito.model';
//import { CommonModule } from '@angular/common';
//
//@Component({
//  selector: 'app-pesquisa-creditos',
//  standalone: true,
//  imports: [CommonModule],
//  templateUrl: './pesquisa-creditos-component.html',
//  styleUrls: ['./pesquisa-creditos-component.css']
//})
//export class PesquisaCreditosComponent implements OnInit {
//
//  creditos: Credito[] = [];
//  numeroNfse: string = '';
//  numeroCredito: string = '';
//  buscou: boolean = false;
//
//  constructor(private minhaApi: PesquisaCreditosService) { }
//
//  ngOnInit(): void {}
//
//  buscarCreditos() {
//    this.buscou = true;
//    if (this.numeroNfse.trim() !== '') {
//      this.minhaApi.obterCreditosPorNfse(this.numeroNfse).subscribe(
//        data => {
//          this.creditos = data;
//        },
//        error => {
//          console.error('Erro ao buscar créditos por NFS-e:', error);
//          this.creditos = [];
//        }
//      );
//    } else if (this.numeroCredito.trim() !== '') {
//      this.minhaApi.obterCreditosPorNumeroCredito(this.numeroCredito).subscribe(
//        data => {
//          this.creditos = data;
//        },
//        error => {
//          console.error('Erro ao buscar créditos por Número:', error);
//          this.creditos = [];
//        }
//      );
//    } else {
//      this.creditos = [];
//    }
//  }
//}

import { Component } from '@angular/core';

@Component({
  selector: 'app-pesquisa-creditos',
  templateUrl: './pesquisa-creditos-component.html',
  styleUrls: ['./pesquisa-creditos-component.css'],
  standalone: true
})
export class PesquisaCreditosComponent {
  numeroNfse: string = '';
  numeroCredito: string = '';
  creditos: any[] = [];

  buscarCreditos() {
    console.log("Buscando créditos...", this.numeroNfse, this.numeroCredito);
    // Aqui você pode colocar a lógica de consulta via HTTP
  }
}
