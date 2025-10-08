import { Credito } from '../../model/credito.model';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PesquisaCreditosService } from '../pesquisa-creditos-service/pesquisa-creditos-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pesquisa-creditos',
  templateUrl: './pesquisa-creditos-component.html',
  styleUrls: ['./pesquisa-creditos-component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  providers: [PesquisaCreditosService]
})
export class PesquisaCreditosComponent {
	searchTerm: string = '';
	searchType: string = 'nfse';
	resultados: Credito[] = [];

	constructor(private creditoService: PesquisaCreditosService) {}
	
	ngOnInit() {
		this.search();
	}

	search(){
		if (!this.searchTerm.trim()) {
	      this.creditoService.getCreditos().subscribe((dados) => {
	        this.resultados = dados;
	      });
	    } else {
	      if (this.searchType === 'nfse') {
	        this.creditoService.getCreditosPorNfse(this.searchTerm).subscribe((dados) => {
	          this.resultados = dados;
	        });
	      } else {
	        this.creditoService.getCreditoPorNumCredConstituido(this.searchTerm).subscribe((dados) => {
	          this.resultados = dados;
	        });
	      }
	   }
	}
}
