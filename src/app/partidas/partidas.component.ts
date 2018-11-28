import { Component, OnInit } from '@angular/core';
import { Partida } from "../core/model/partida.model";
import { PartidaService } from "../core/servicos/partida.service";

@Component({
	selector: 'app-partidas',
	templateUrl: './partidas.component.html',
	styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit {

	partidas: Partida[];
	posicoes: any;
	dataAtual: Date = new Date();


	constructor(private partidaService: PartidaService) { }


	ngOnInit() {
		this.partidaService.getUltimas()
			.subscribe((resposta: Partida[]) => {
				this.partidas = resposta;
			})
	}

}
