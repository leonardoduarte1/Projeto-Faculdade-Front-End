import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

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
import { SharedModule } from "./shared/shared.module";
import { SumulaComponent } from './sumula/sumula.component';
import { ConvitesComponent } from './convites/convites.component';
import { HistoricoComponent } from './historico/historico.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';



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
		PartidasComponent,
		SumulaComponent,
		ConvitesComponent,
		HistoricoComponent,
		EstatisticasComponent
	],
	imports: [
		AppRouter,
		BrowserModule,
		FormsModule,
		NgxMaskModule.forRoot(),
		SharedModule,
		CoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
