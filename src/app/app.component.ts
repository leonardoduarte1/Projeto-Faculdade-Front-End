import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	exibirMenu: boolean = true;
	token_id: string;
	title = 'Várzea7';

	ngOnInit() {
		this.token_id = localStorage.getItem("idTokenVarzea");
		if (this.token_id == null) {
			this.exibirMenu = false;
		}

	}
}
