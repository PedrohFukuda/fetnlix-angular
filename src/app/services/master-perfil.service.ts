import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//Componentes necessarios
import { MasterPerfil } from '../base-data-types/perfil-dt/master-perfil';
//Componentes de banco de dados
import { MASTERA } from '../mock-data/mock-masterPerfilA'

@Injectable({
  providedIn: 'root'
})
export class MasterPerfilService {
	MASTER: MasterPerfil[] = MASTERA;
	currId: number = 2;

	constructor() { }

	//GETS

	getPerfil(id: number): Observable<MasterPerfil> {
		return of(this.MASTER.find(masterPerfil => masterPerfil.id === id));
	}

	//ADDS

	create(emailTx: string, senhaTx: string, contaId: number): MasterPerfil{
		const master: MasterPerfil = {
			id: this.currId,
			email: emailTx,
			senha: senhaTx,
			dtNascimento: '00/00/00',
			perfilBase: { id: 1, nome: "Perfil principal", lsFilmesAssistir: []},
			idConta: contaId
		};
		this.MASTER.push(master);

		this.currId++;
		return master;
	}
	
}
