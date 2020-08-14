import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
//Componentes necessarios
import { ContaComponent } from './componentes/conta/conta.component';
import { DetalhesPerfilComponent } from './componentes/detalhes-perfil/detalhes-perfil.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListaContasComponent } from './componentes/lista-contas/lista-contas.component';
import { BuscaFilmeComponent } from './componentes/busca-filme/busca-filme.component'

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'conta', component: ContaComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'conta/perfil/:idPerfil', component: DetalhesPerfilComponent },
	{ path: 'allcontas', component: ListaContasComponent },
	{ path: 'busca', component: BuscaFilmeComponent },
	{ path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
	constructor(private router: Router){}

	RedirectConta(id: number){
		if (id === 99)
			this.router.navigate(['allcontas']);
		else if (id !== -1){
			this.router.navigate(['conta/{{id}}']);
		}
	}
 }