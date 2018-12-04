import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AutenticacaoService } from "../../servicos/autenticacao.service";
import { NotificacaoService } from "../../servicos/notificacao.service";
import { Time } from "../../model/time.model";
import { Router } from "@angular/router";

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	iconNotificacao: string;
	@Output() ocultarMenu = new EventEmitter();
	time: Time = JSON.parse(localStorage.getItem("time"));
	public nome: string = "";

	constructor(
		private autenticacaoService: AutenticacaoService,
		private notificacaoService: NotificacaoService,
		private router: Router) { }

	ngOnInit() {
		this.notificacaoService.jogoPendente(this.time.Id)
			.subscribe((resposta: boolean) => {

				if (resposta)
					this.iconNotificacao = "notifications_active";
				else
					this.iconNotificacao = "notifications";

			})
	}

	onSubmit() {

		this.router.navigate(["/partidas/inicio", { nome: this.nome }]);
	}

	sair() {
		this.ocultarMenu.emit(true);
		this.autenticacaoService.sair();
	}
}
