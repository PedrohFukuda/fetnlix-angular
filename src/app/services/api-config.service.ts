import { Injectable } from '@angular/core';
import { RespostaTmdb } from '../base-data-types/resposta-apis/resposta-tmdb';
//Componentes de acesso a apis
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filme } from '../base-data-types/filme';

export const api_key = '08453d167017d4e4b74c8fd4d25b5e8c';
export const base_url = 'https://api.themoviedb.org/3/';

@Injectable({
  providedIn: 'root'
})

export class ApiConfigService {
	serverResponse: string = 'vazia';

	constructor(private http: HttpClient) { }

	async searchById(id: number): Promise<Filme>{
		if (id === undefined)
			return;
		const url = `${base_url}search/movie${id}?api_key=${api_key}&language=pt-BR`;
		return this.http.get<Filme>(url).toPromise();
	}
	
	async searchByName(nome: string): Promise<RespostaTmdb>{
		if (nome === undefined)
			return;
		const url = `${base_url}search/movie?api_key=${api_key}&language=pt-BR&query=${this.formatarString(nome)}&page=1`;
		return this.http.get<RespostaTmdb>(url).toPromise();
	}

	formatarString(original: string): string{
		return original.replace(' ', '%20');
	}
}
