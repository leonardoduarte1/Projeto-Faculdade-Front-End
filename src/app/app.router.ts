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
import { AutenticacaoGuard } from "./core/servicos/autenticacao-guard.service";


const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AutenticacaoGuard]
	},
	{
		path: 'meu-time',
		component: MeuTimeComponent,
		canActivate: [AutenticacaoGuard]
	},
	{
		path: 'meu-time/adicionar-jogador',
		component: JogadoresComponent,
		canActivate: [AutenticacaoGuard]
	},
	{
		path: 'partidas/tempo-real',
		component: PartidasComponent,
		canActivate: [AutenticacaoGuard]
	},
	{
		path: 'partidas/inicio',
		component: BuscarPartidasComponent,
		canActivate: [AutenticacaoGuard]
	},
	{
		path: 'partidas/marcar',
		component: MarcacaoComponent,
		canActivate: [AutenticacaoGuard]
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
		component: BuscarPartidasComponent,
		canActivate: [AutenticacaoGuard]
	},

];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRouter { }


