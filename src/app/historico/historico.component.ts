import { Component, OnInit } from '@angular/core';
import { Partida } from "../core/model/partida.model";
import { PartidaService } from "../core/servicos/partida.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-historico',
	templateUrl: './historico.component.html',
	styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
	id: string;

	partidas: Partida[];
	mostrarLoading: boolean = true;

	constructor(private partidaService: PartidaService, private route: ActivatedRoute) { }


	ngOnInit() {
		this.partidaService.getHistorico(this.route.snapshot.params["id"])
			.subscribe((resposta: Partida[]) => {
				this.partidas = resposta;
				this.mostrarLoading = false;
			});
		this.id = this.route.snapshot.params["id"];
	}

}
