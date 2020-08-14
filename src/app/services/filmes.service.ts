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
	filmes: Filme[];
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

	getFilme(id: number): Observable<Filme>{
		return of(FILMES.find(filme => filme.id === id));
	}
	
	getFilmeApi(nome: string): Observable<Filme[]>{
		this.api.searchByName(nome).subscribe((res) =>{
			this.response = res as unknown as RespostaTmdb;
			this.filmes = this.response.results;
			console.log('A api retornou');
			console.log(this.filmes);
			return of(this.filmes);
		});
		console.log('FilmesService get da api FINAL');
		return of(this.filmes);
	}

}
