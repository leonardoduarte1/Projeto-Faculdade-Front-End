import { Component, OnInit } from '@angular/core';
import { PartidaService } from "../core/servicos/partida.service";
import { ActivatedRoute } from "@angular/router";
import { Partida } from "../core/model/partida.model";
import { CONFIG } from "src/environments/environment";

@Component({
	selector: 'app-sumula',
	templateUrl: './sumula.component.html',
	styleUrls: ['./sumula.component.css']
})
export class SumulaComponent implements OnInit {

	partida: Partida;
	idPartida: string;
	partidaEncerrada: Partida = new Partida();

	constructor(private partidaService: PartidaService, private route: ActivatedRoute) { }

	ngOnInit() {

		this.partidaService.getDadosSumulaPartida(this.route.snapshot.params["id"])
			.subscribe((resposta: any) => {
				this.partida = resposta;
				this.idPartida = resposta.Id;
				console.log(resposta);
			});
	}

	encerrar() {

		if (this.partidaEncerrada.PlacarTimeA > this.partidaEncerrada.PlacarTimeB) {
			this.partidaEncerrada.IdTimeVencedor = this.partida.IdTimeA;
		} else if (this.partidaEncerrada.PlacarTimeB > this.partidaEncerrada.PlacarTimeA) {
			this.partidaEncerrada.IdTimeVencedor = this.partida.IdTimeB;
		} else {
			this.partidaEncerrada.IdTimeVencedor = 0;
		}


		this.partidaService.encerrar(this.idPartida, this.partidaEncerrada)
			.subscribe((resposta: any) => {
				this.partida = resposta;
				window.location.href = CONFIG.URL_SISTEMA + "/";
				console.log(resposta);
			});
	}

}
