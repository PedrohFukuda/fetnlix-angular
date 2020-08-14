import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { Filme } from '../../base-data-types/filme';
import { Perfil } from '../../base-data-types/perfil-dt/perfil';
import { MasterPerfil } from '../../base-data-types/perfil-dt/master-perfil';
//Componentes de serviço
import { MasterPerfilService } from '../../services/master-perfil.service';

@Component({
  selector: 'app-master-perfil',
  templateUrl: './master-perfil.component.html',
  styleUrls: ['./master-perfil.component.css']
})
export class MasterPerfilComponent implements OnInit {
	@Input() masterPerfil: MasterPerfil;
	perfilB: Perfil;
	filmes: Filme[];

  constructor( private masterService: MasterPerfilService) {
	 }

  ngOnInit(): void {
		this.getPerfil();
	}
	
	getPerfil(): void{
		this.perfilB = this.masterPerfil.perfilBase;
	}

	save(): void {
		//TODO
	}

}
