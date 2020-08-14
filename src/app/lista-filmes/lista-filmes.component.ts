import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
//Componentes necessarios
import { Filme } from '../base-data-types/filme';
//Componentes de serviço
import { FilmesService } from '../services/filmes.service';


@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {
	@Input() filmes: Filme[];

  constructor(private filmesService: FilmesService) { }

  ngOnInit(): void {
	}
	
	getFilmes(): void{
		this.filmesService.getFilmes().subscribe(filmes => this.filmes = filmes);
		console.log('Dentro lista filmes');
		console.log(this.filmes);
	}

	getFilme(id: number): void{
		this.filmesService.getFilmeIdApi(id);
	}

}
