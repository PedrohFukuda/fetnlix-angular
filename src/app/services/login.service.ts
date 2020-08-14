import { Injectable } from '@angular/core';
//Componentes necessarios
import { Conta } from '../base-data-types/conta'
//Componentes de serviço
import { ContaService } from '../services/conta.service';
//Componentes de rota
import { Router } from '@angular/router';
//Componentes de autenticação
//import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
	conta: Conta;

	constructor(
		private contaService: ContaService,
		private router: Router
	) { }
	
	logar(email: string, senha: string): void{
		this.conta = this.contaService.getContaByEmail(email);
		
		if (
		(this.conta !== undefined) && 
		(this.conta.masterPerfil.senha === senha)
		){
			this.conta.estaAutenticado = true;
			this.contaService.ativarConta(this.conta.id);
			this.router.navigate(['busca']);
			
		} else {
			alert('Email ou senha incorretos!');
		}
	}

	/*/autenticacao
  public isAuthenticated(): boolean {
		const token = localStorage.getItem('token');
		
    // Check whether the token is expired or not
    return !this.jwtHelper.isTokenExpired(token);
  }//*/

}
