import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AutenticacaoService } from "../../servicos/autenticacao.service";

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


	@Output() ocultarMenu = new EventEmitter();

	constructor(
		private autenticacaoService: AutenticacaoService) { }

	ngOnInit() {
	}

	sair() {
		this.ocultarMenu.emit(true);
		this.autenticacaoService.sair();
	}
}
