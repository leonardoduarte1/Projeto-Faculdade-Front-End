import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from "../core/servicos/autenticacao.service";
import { Router } from "@angular/router";
import { CONFIG } from "../../environments/environment";
import { NotificacaoService } from "src/app/core/servicos/notificacao.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	mensagem: string = "";

	public email: string = "";
	public senha: string = "";

	constructor(
		private autenticacaoService: AutenticacaoService,
		private notificacaoService: NotificacaoService,
		private router: Router) { }

	ngOnInit() {
	}

	logar() {
		this.autenticacaoService.autenticar(this.email, this.senha)
			.subscribe(
			(resposta: any) => {
				let time = resposta;
				localStorage.setItem("time", JSON.stringify(time));
				localStorage.setItem("idTokenVarzea", time.Id);


				this.notificacaoService.preencherSumula(time.Id)
					.subscribe((resposta: any) => {
						console.log(resposta);
						if (resposta)
							window.location.href = CONFIG.URL_SISTEMA + "/sumula/" + time.Id;
						else
							window.location.href = CONFIG.URL_SISTEMA + "/";
					});


			},
			(err) => {
				this.mensagem = err.message;
				console.log(this.mensagem)
			}
			)


	}
}
