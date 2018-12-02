import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AutenticacaoService } from "../../servicos/autenticacao.service";
import { NotificacaoService } from "../../servicos/notificacao.service";
import { Time } from "../../model/time.model";

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	iconNotificacao: string;
	@Output() ocultarMenu = new EventEmitter();
	time: Time = JSON.parse(localStorage.getItem("time"));
	nome:any = "";

	constructor(
		private autenticacaoService: AutenticacaoService,
		private notificacaoService: NotificacaoService) { }

	ngOnInit() {
		this.notificacaoService.jogoPendente(this.time.Id)
			.subscribe((resposta: boolean) => {

				if (resposta)
					this.iconNotificacao = "notifications_active";
				else
					this.iconNotificacao = "notifications";

			})
	}

	submit(){
		console.log("aa" + this.nome);
	}

	sair() {
		this.ocultarMenu.emit(true);
		this.autenticacaoService.sair();
	}
}
