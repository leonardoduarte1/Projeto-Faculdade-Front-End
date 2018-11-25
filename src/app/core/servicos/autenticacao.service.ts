import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { Time } from "../model/time.model";
import { Observable } from "rxjs";
import { CONFIG } from "../../../environments/environment";

@Injectable()
export class AutenticacaoService {

	public token_id: string;

	constructor(private router: Router, private http: HttpClient) { }

	public autenticar(email: string, senha: string) {

		let senhaCriptografada = btoa(senha);
		return this.http.get(CONFIG.URL_API + "/api/time/?email=" + email + "&senha=" + senhaCriptografada)


	}

	public autenticado(): boolean {

		if (localStorage.getItem("time") == undefined) {
			this.router.navigate(["/entrar"]);
			localStorage.removeItem("idTokenVarzea")
		}

		if (this.token_id == undefined && localStorage.getItem("idTokenVarzea") != null) {
			this.token_id = localStorage.getItem("idTokenVarzea");
		}

		if (this.token_id == undefined) {
			this.router.navigate(["/entrar"]);
		}

		return this.token_id != undefined;
	}

	public sair(): void {

		localStorage.removeItem("idTokenVarzea");
		localStorage.removeItem("time");
		this.token_id = undefined;
		window.location.reload();

	}
}
