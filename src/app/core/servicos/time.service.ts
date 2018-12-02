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
	nome: any;

	constructor(private http: HttpClient) { }

	public getTimes() {

		let params = new HttpParams();

		if (this.idNao) {
			params = params.append('idNao', this.idNao);
		}
		
		if (this.nome) {
			params = params.append('nome', this.nome);
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

	onUpload(imagem, nomeImagem) {
		// this.http is the injected HttpClient
		const uploadData = new FormData();
		uploadData.append('file', imagem, nomeImagem);
		this.http.post(CONFIG.URL_API + "/api/time/upload", uploadData)
			.subscribe((resposta: any) => {
				console.log(resposta);
			});
	}
}
