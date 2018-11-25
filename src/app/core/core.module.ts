import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './componentes/menu/menu.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { RouterModule } from "@angular/router";
import { TimeService } from "./servicos/time.service";
import { ParametrosService } from "./servicos/parametros.service";
import { AutenticacaoService } from "./servicos/autenticacao.service";
import { AutenticacaoGuard } from "./servicos/autenticacao-guard.service";
import { JogadorService } from "./servicos/jogador.service";
import { PartidaService } from "./servicos/partida.service";
import { NotificacaoService } from "./servicos/notificacao.service";

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		HttpClientModule
	],
	declarations: [MenuComponent, RodapeComponent],
	exports: [MenuComponent, RodapeComponent],
	providers: [
		TimeService,
		ParametrosService,
		AutenticacaoService,
		AutenticacaoGuard,
		JogadorService,
		NotificacaoService,
		PartidaService
	]
})
export class CoreModule { }
