import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CONFIG } from "../../../environments/environment";

import { Observable } from "rxjs";

@Injectable()
export class ParametrosService {

	constructor(private http: HttpClient) { }

	public getEstados() {
		return this.http.get(CONFIG.URL_API + "/api/parametros/estados");
	}

	public getCidades(idEstado) {
		return this.http.get(CONFIG.URL_API + "/api/parametros/cidades/" + idEstado);
	}

	public getBairros(idCidade) {
		return this.http.get(CONFIG.URL_API + "/api/parametros/bairros/" + idCidade);
	}

	public getPosicoes() {
		return this.http.get(CONFIG.URL_API + "/api/parametros/posicoes");
	}

	public getLocaisPartida() {
		return this.http.get(CONFIG.URL_API + "/api/parametros/localpartida");
	}
}
