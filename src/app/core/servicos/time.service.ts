import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONFIG } from "../../../environments/environment";

import { Time } from "../model/time.model";
import { Observable } from "rxjs";
import { HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable()
export class TimeService {

	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'

		}),
		params: new HttpParams()
	};

	idNao: any;

	constructor(private http: HttpClient) { }

	public getTimes() {

		let params = new HttpParams();

		if (this.idNao) {
			params = params.append('idNao', this.idNao);
		}


		return this.http.get(CONFIG.URL_API + "/api/time/listar", { params });
	}

	public buscarTimePeloId(id) {

		return this.http.get(CONFIG.URL_API + "/api/time/" + id);
	}


	public cadastrarTime(time: Time) {

		time.Senha = btoa(time.Senha);


		return this.http.post<Time>(CONFIG.URL_API + "/api/time", time, this.httpOptions);

	}
}
