import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONFIG } from "../../../environments/environment";

import { Time } from "../model/time.model";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";


const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable()
export class TimeService {

	constructor(private http: HttpClient) { }

	public getTimes() {
		return this.http.get(CONFIG.URL_API + "/api/time");
	}

	public cadastrarTime(time: Time) {

		time.Senha = btoa(time.Senha);


		return this.http.post<Time>(CONFIG.URL_API + "/api/time", time, httpOptions);

	}
}
