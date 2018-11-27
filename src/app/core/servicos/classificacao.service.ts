import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONFIG } from "../../../environments/environment";

import { Classificacao } from "../model/classificacao.model";
import { Observable } from "rxjs";
import { HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable()
export class ClassificacaoService {

	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'

		}),
		params: new HttpParams()
	};

	constructor(private http: HttpClient) { }


	public inserir(classificacao: Classificacao) {


		return this.http.post<Classificacao>(CONFIG.URL_API + "/api/classificacao", classificacao, this.httpOptions);

	}


}
