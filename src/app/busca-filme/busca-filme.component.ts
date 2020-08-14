import { Component, OnInit } from '@angular/core';
//Componentes necessarios
import { Filme } from '../base-data-types/filme';
//Componentes de servico
import { FilmesService } from '../services/filmes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca-filme',
  templateUrl: './busca-filme.component.html',
  styleUrls: ['./busca-filme.component.css']
})
export class BuscaFilmeComponent implements OnInit {
	displayedColumnsFilmes: string[] = ['id'];
	nomeFilme: string;
	filmes: Filme[];

  constructor( 
		private filmesService: FilmesService,
		private router: Router
		) { }

  ngOnInit(): void {
		this.filmes = [];
	}

	getFilmes(): void{
		//this.filmesService.getFilmeApi(this.nomeFilme).subscribe(filmes => this.filmes = filmes);
	}

	async buscarFilmeNome() {
		if(this.nomeFilme === ''){
			this.filmes = [];
		} else {
			await this.filmesService.getFilmesNomeApi(this.nomeFilme)
			.then( async filmesRetornados => {
					this.filmes = filmesRetornados;
					console.log('Lista retornada da filmeService (BUSCA-FILME): ');
					console.log(filmesRetornados);
				}
			);
			//console.log('Lista usada(BUSCA-FILME): ');
			//console.log(this.filmes);
		}
	}

	goConta(){
		this.router.navigate(['conta']);
	}

	addWatchLater(){
		//TODO
	}

}
