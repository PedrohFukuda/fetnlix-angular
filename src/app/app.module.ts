import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContaComponent } from './componentes/conta/conta.component';
import { PerfisComponent } from './componentes/perfis/perfis.component';
import { MasterPerfilComponent } from './componentes/master-perfil/master-perfil.component';
import { FilmeComponent } from './componentes/filme/filme.component';
import { DetalhesPerfilComponent } from './componentes/detalhes-perfil/detalhes-perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaFilmesComponent } from './componentes/lista-filmes/lista-filmes.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListaContasComponent } from './componentes/lista-contas/lista-contas.component';
import { BuscaFilmeComponent } from './componentes/busca-filme/busca-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    PerfisComponent,
    MasterPerfilComponent,
    FilmeComponent,
    DetalhesPerfilComponent,
    ListaFilmesComponent,
    LoginComponent,
    ListaContasComponent,
    BuscaFilmeComponent
  ],
  imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
