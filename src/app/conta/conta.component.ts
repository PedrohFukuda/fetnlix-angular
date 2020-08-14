import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { Conta } from '../base-data-types/conta';
import { Perfil } from '../base-data-types/perfil-dt/perfil';
import { MasterPerfil } from '../base-data-types/perfil-dt/master-perfil'
//Componentes de serviço
import { ContaService } from '../services/conta.service'
//Componentes de rota
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
	@Input() conta: Conta;
	currMaster: MasterPerfil;
	currPerfis: Perfil[];
	
  constructor(
		private contaService: ContaService,
		private route: ActivatedRoute,
		private location: Location
	) {}

  ngOnInit(): void {
		this.getConta();
	}

	getConta(): void{
		this.contaService.getContaAtiva().subscribe(conta => this.conta = conta);
		
		if (this.conta !== undefined){
			this.currMaster = this.conta.masterPerfil;
			this.currPerfis = this.conta.perfis;
		}
	}

	getMasterPerfil(id: number): MasterPerfil{
		return this.conta.masterPerfil;
	}

	deslogar(){
		this.contaService.deslogar();
	}

}
