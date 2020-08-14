import { Component, OnInit } from '@angular/core';
//Componentes necessarios
import { Filme } from '../base-data-types/filme';
//Componentes de servico
import { FilmesService } from '../services/filmes.service';
import { ContaService } from '../services/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca-filme',
  templateUrl: './busca-filme.component.html',
  styleUrls: ['./busca-filme.component.css']
})
export class BuscaFilmeComponent implements OnInit {
	mySubscription: any;
	nomeFilme: string;
	resultados: string;
	filmes: Filme[];

  constructor( 
		private filmesService: FilmesService,
		private router: Router
		) { }

  ngOnInit(): void {
	}

	getFilmes(): void{
		this.filmesService.getFilmeApi(this.nomeFilme).subscribe(filmes => this.filmes = filmes);
	}

	buscarFilmeNome(): void {
		if(this.nomeFilme === ''){
			this.filmes = undefined;
			return;
		}
		
		this.filmesService.getFilmeApi(this.nomeFilme)
			.subscribe((filmesRetornados) => {
					this.filmes = filmesRetornados;
				}
			);
	}

	goConta(){
		this.router.navigate(['conta']);
	}

}
