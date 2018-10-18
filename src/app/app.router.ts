import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MeuTimeComponent } from './meu-time/meu-time.component';
import { BuscarPartidasComponent } from "./buscar-partidas/buscar-partidas.component";
import { MarcacaoComponent } from "./marcacao/marcacao.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";
import { JogadoresComponent } from "./jogadores/jogadores.component";
import { PartidasComponent } from "./partidas/partidas.component";


const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'meu-time',
		component: MeuTimeComponent
	},
	{
		path: 'meu-time/adicionar-jogador',
		component: JogadoresComponent
	},
	{
		path: 'partidas/tempo-real',
		component: PartidasComponent
	},
	{
		path: 'partidas/inicio',
		component: BuscarPartidasComponent
	},
	{
		path: 'partidas/marcar',
		component: MarcacaoComponent
	},
	{
		path: 'cadastro',
		component: CadastroComponent
	},
	{
		path: 'entrar',
		component: LoginComponent
	},
	{
		path: 'torneios/inicio',
		component: BuscarPartidasComponent
	},

];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRouter { }


