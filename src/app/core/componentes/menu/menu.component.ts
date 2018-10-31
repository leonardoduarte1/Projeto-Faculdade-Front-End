import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from "../../servicos/autenticacao.service";

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	constructor(
		private autenticacaoService: AutenticacaoService) { }

	ngOnInit() {
	}

	sair() {
		this.autenticacaoService.sair();
	}
}
