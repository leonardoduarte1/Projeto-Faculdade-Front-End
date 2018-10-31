import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AutenticacaoService } from "./autenticacao.service";

@Injectable()
export class AutenticacaoGuard implements CanActivate {

	constructor(private autenticacao: AutenticacaoService) { }

	canActivate(): boolean {

		return this.autenticacao.autenticado();

	}
}