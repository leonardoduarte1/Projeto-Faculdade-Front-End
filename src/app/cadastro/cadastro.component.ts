import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from "@angular/core";
import { TimeService } from "../core/servicos/time.service";
import { Time } from "../core/model/time.model";
import { ParametrosService } from "../core/servicos/parametros.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class CadastroComponent implements OnInit {

	public time = new Time();
	public estados: any;
	public cidades: any;
	public bairros: any;
	selectedFile: File;

	constructor(
		private timeService: TimeService,
		private parametros: ParametrosService,
		private router: Router) { }

	ngOnInit() {
		this.parametros.getEstados()
			.subscribe((resposta) => this.estados = resposta)
	}

	cadastrarTime() {
		this.timeService.cadastrarTime(this.time).subscribe((resposta) => {
			if (resposta) {
				this.router.navigate(["/entrar"]);
			}
		})
	}

	onFileChanged(event) {
		this.time.Emblema = event.target.files[0];

		this.timeService.onUpload(this.time.Emblema, this.time.Nome);

		console.log(this.time.Emblema);
	}


	comboCidades(idEstado) {
		this.parametros.getCidades(idEstado)
			.subscribe((resposta) => this.cidades = resposta)
	}

	comboBairros(idCidade) {
		this.parametros.getBairros(idCidade)
			.subscribe((resposta) => this.bairros = resposta)
	}

}
