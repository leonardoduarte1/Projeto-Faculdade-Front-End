import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONFIG } from "../../../environments/environment";

import { Jogador } from "../model/jogador.model";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";


const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})

};

@Injectable()
export class JogadorService {

	constructor(private http: HttpClient) { }

	public getJogadores(idTime) {
		return this.http.get(CONFIG.URL_API + "/api/jogador/?idTime=" + idTime);
	}

	public inserirJogador(jogador: Jogador) {

		return this.http.post<Jogador>(CONFIG.URL_API + "/api/jogador", jogador, httpOptions);

	}
}
