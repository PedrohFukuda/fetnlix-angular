import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { Conta } from '../base-data-types/conta';
//Componentes de serviço
import { LoginService } from '../services/login.service';
import { ContaService } from '../services/conta.service';
//Componentes de roteamento
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	conta: Conta;
	emailTxt: string = 'AA@A';
	senhaTxt: string = 'AA';

  constructor(
		private loginService: LoginService,
		private contaService: ContaService,
		private router: Router
	) { }

  ngOnInit(): void {
	}
	
	logar(): void {
		this.loginService.logar(this.emailTxt, this.senhaTxt);
	}

	registrar(): void {
		this.contaService.create(this.emailTxt, this.senhaTxt);
		this.router.navigate(['/conta/']);
	}

}
