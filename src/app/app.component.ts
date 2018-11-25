import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	exibirMenu: boolean = true;
	token_id: string;
	title = 'Seu Time';

	constructor(private location: Location) { }

	ngOnInit() {
		this.token_id = localStorage.getItem("idTokenVarzea");
		if (this.token_id == null) {
			this.exibirMenu = false;
		}

		if (this.location.path() === "/entrar") {
			this.exibirMenu = false;
			return;
		}
		if (this.location.path().includes("/sumula")) {
			this.exibirMenu = false;
			return;
		}

	}

	ocultarMenu() {
		this.exibirMenu = false;
	}

}
