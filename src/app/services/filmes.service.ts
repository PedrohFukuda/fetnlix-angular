import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//Componentes necessarios
import { Filme } from '../base-data-types/filme'
//Componentes de acesso a apis
import { RespostaTmdb } from '../base-data-types/resposta-apis/resposta-tmdb';
import { ApiConfigService  } from './api-config.service';
//Mock database
import { FILMES } from '../mock-data/mock-filmes'

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
	response: RespostaTmdb;
	filmes: Filme[] = [];
	aux: number;

	constructor( private api: ApiConfigService) { }
	
	//GETS
	getFilmes(): Observable<Filme[]> {
		return of(FILMES);
	}

	getFilmesByIds(idList: number[]): Observable<Filme[]> {
		this.aux = 0;
		for (let id of idList){
			this.getFilme(id)
				.subscribe(filme => this.filmes[this.aux] = filme);
			if (this.filmes[this.aux] !== undefined)
				this.aux++;
		}
		return of(FILMES);
	}

	async getFilmeIdApi(id: number): Promise<Filme>{
		await new Promise<Filme>( async resolve => {
			await this.api.searchById(id).then( async res => {
				this.filmes[0] = <Filme> res;
				console.log('FILME BUCADO POR ID (FILME-SERVICE)');
				console.log(this.filmes[0]);
			});
		});
		return this.filmes[0];
	}

	//
	getFilme(id: number): Observable<Filme>{
		return of(FILMES.find(filme => filme.id === id));
	}
	//*/
	
	async getFilmesNomeApi(nome: string): Promise<Filme[]>{
		await new Promise<Filme[]>( async resolve => {
			await this.api.searchByName(nome).then(async (res) => {
				this.response = res;
				this.filmes = this.response.results;
				//console.log('A api retornou(FILME-SERVICE)');
				//console.log(this.filmes);
				resolve();
			}, err => {
				console.log(err);
				resolve();
			});
			resolve();
		});
		//console.log('PROMESSA FEITA (FILME-SERVICE)');
		//console.log(this.filmes);
		return this.filmes;
	}

}
