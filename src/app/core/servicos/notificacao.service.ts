import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONFIG } from "../../../environments/environment";

import { Observable } from "rxjs";
import { HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable()
export class NotificacaoService {

	constructor(private http: HttpClient) { }

	public preencherSumula(id) {

		return this.http.get(CONFIG.URL_API + "/api/notificacao/sumula/" + id);
	}

}
