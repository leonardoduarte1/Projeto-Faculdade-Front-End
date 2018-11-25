import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONFIG } from "../../../environments/environment";

import { Partida } from "../model/partida.model";
import { Observable } from "rxjs";
import { HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable()
export class PartidaService {

	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'

		}),
		params: new HttpParams()
	};

	idNao: any;

	constructor(private http: HttpClient) { }

	public getPartidas() {

		let params = new HttpParams();

		if (this.idNao) {
			params = params.append('idNao', this.idNao);
		}


		return this.http.get(CONFIG.URL_API + "/api/partida/listar", { params });
	}

	public getDadosSumulaPartida(id) {

		return this.http.get(CONFIG.URL_API + "/api/partida/preenchersumula/" + id);
	}


	public buscarTimePeloId(id) {

		return this.http.get(CONFIG.URL_API + "/api/time/" + id);
	}


	public inserirPartida(partida: Partida) {


		return this.http.post<Partida>(CONFIG.URL_API + "/api/partida", partida, this.httpOptions);

	}

	public alterarSituacao(idPartida, idSituacao) {

		let params = new HttpParams();

		params = params.append('idPartida', idPartida);
		params = params.append('idSituacao', idSituacao);

		return this.http.get(CONFIG.URL_API + "/api/partida/alterarsituacao", { params });
	}

	public encerrar(idPartida, partida) {

		return this.http.put(CONFIG.URL_API + "/api/partida/encerrar/" + idPartida, partida);
	}

}
