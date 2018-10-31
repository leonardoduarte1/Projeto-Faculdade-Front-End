import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRouter } from './app.router';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MeuTimeComponent } from './meu-time/meu-time.component';
import { BuscarPartidasComponent } from './buscar-partidas/buscar-partidas.component';
import { MarcacaoComponent } from './marcacao/marcacao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { PartidasComponent } from './partidas/partidas.component';



@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		MeuTimeComponent,
		BuscarPartidasComponent,
		MarcacaoComponent,
		CadastroComponent,
		LoginComponent,
		JogadoresComponent,
		PartidasComponent
	],
	imports: [
		AppRouter,
		BrowserModule,
		FormsModule,
		CoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
