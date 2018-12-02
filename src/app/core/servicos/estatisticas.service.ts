import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONFIG } from "../../../environments/environment";

import { Observable } from "rxjs";
import { HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable()
export class EstatisticasService {

	constructor(private http: HttpClient) { }

	public gols(idTime) {

		return this.http.get(CONFIG.URL_API + "/api/estatisticas/gols/" + idTime);
	}

	public partidas(idTime) {

		return this.http.get(CONFIG.URL_API + "/api/estatisticas/partidas/" + idTime);
	}

}
