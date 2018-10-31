import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from "../core/servicos/autenticacao.service";
import { Router } from "@angular/router";
import { CONFIG } from "../../environments/environment";

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
		private router: Router) { }

	ngOnInit() {
	}

	logar() {
		this.autenticacaoService.autenticar(this.email, this.senha)
			.subscribe(
			(resposta: any) => {

				localStorage.setItem("time", JSON.stringify(resposta));
				localStorage.setItem("idTokenVarzea", resposta.Id);

				window.location.href = CONFIG.URL_SISTEMA + "/";
			},
			(err) => {
				this.mensagem = err.message;
				console.log(this.mensagem)
			}
			)


	}
}
