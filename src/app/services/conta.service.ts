import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//Componentes necessarios
import { Conta } from '../base-data-types/conta'
import { MasterPerfil } from '../base-data-types/perfil-dt/master-perfil'
import { Perfil } from '../base-data-types/perfil-dt/perfil'
//Componentes do banco de dados
import { MOCKCONTA } from '../mock-data/mock-contas'
//Componentes de serviço
import { MasterPerfilService } from './master-perfil.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContaService {
	static CONTA: Conta[] = MOCKCONTA;
	currId: number = 2;
	private static contaAtiva: number;

	constructor(
		private masterService: MasterPerfilService,
		private router: Router
	) {
		ContaService.contaAtiva = -1;
	}

	public ativarConta(id: number): void {
		ContaService.contaAtiva = id;
	}

	public getContaAtiva(): Observable<Conta> {
		if (ContaService.contaAtiva !== -1){
			console.log('CONTAS');
			console.log(ContaService.CONTA);
			return this.getConta(ContaService.contaAtiva);
		}
			alert('Faca login para continuar');
		this.router.navigate(['login']);
	}
	
	getContas(): Observable<Conta[]>{
		return of(ContaService.CONTA);
	}

	//GETS
	getConta(id: number): Observable<Conta>{
		return of(ContaService.CONTA.find(conta => conta.id === id));
	}

	getContaByEmail(email: string): Conta{
		return ContaService.CONTA.find(conta => conta.masterPerfil.email === email);
	}

	getMasterPerfil(id: number): Observable<MasterPerfil>{
		return of(ContaService.CONTA.find(conta => conta.id === id).masterPerfil);
	}

	getPerfisBase(id: number): Observable<Perfil[]>{
		return of(ContaService.CONTA.find(conta => conta.id === id).perfis);
	}

	//ADDS
	create(email: string, senha: string): Boolean{
		if (this.getContaByEmail(email) === undefined) {
			const novaConta: Conta = { 
				estaAutenticado: true,
				id: this.currId, 
				masterPerfil: undefined,
				perfis: []
			}
			
			ContaService.CONTA.push( novaConta );
			ContaService.CONTA[this.currId].masterPerfil = this.masterService.create(email, senha, this.currId);
			this.ativarConta(this.currId);
			this.getConta(this.currId);

			this.currId++;
			return true;
		}

		return false;
	}
	
}
