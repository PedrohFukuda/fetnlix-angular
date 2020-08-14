import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { Filme } from '../../base-data-types/filme';
import { Perfil } from '../../base-data-types/perfil-dt/perfil';
import { MasterPerfil } from '../../base-data-types/perfil-dt/master-perfil';
//Componentes de serviço
import { MasterPerfilService } from '../../services/master-perfil.service';
import { FilmesService } from 'src/app/services/filmes.service';



@Component({
  selector: 'app-master-perfil',
  templateUrl: './master-perfil.component.html',
  styleUrls: ['./master-perfil.component.css']
})
export class MasterPerfilComponent implements OnInit {
	@Input() masterPerfil: MasterPerfil;
	perfilB: Perfil;
	filmes: Filme[];

  constructor(
		private masterService: MasterPerfilService,
		private filmesService: FilmesService
		) {}

  ngOnInit(): void {
		this.getPerfil();
	}
	
	getPerfil(): void{
		this.perfilB = this.masterPerfil.perfilBase;
		this.getFilmeByIds(this.perfilB.lsFilmesAssistir);
	}

	//Codigo original de lista-filmes.component.ts
	//Ao finalizar a implementação dos perfis remover essa função poi ela será redundante
	getFilmeByIds(idFilmes: number[]): void {
		const numeroIds = idFilmes.length;
		if ( 
			(idFilmes === undefined ) ||
			(numeroIds == 0)
		) {
			return;
		}

			this.filmes = [];
		for (let index = 0; index < numeroIds; index++){
			this.filmesService.getFilme(idFilmes[index])
				.subscribe(filme => this.filmes[index] = filme);
		}
	}

	save(): void {
		//TODO
	}

}
