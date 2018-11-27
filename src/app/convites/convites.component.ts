import { Component, OnInit } from '@angular/core';
import { Partida } from "../core/model/partida.model";
import { PartidaService } from "../core/servicos/partida.service";
import { Time } from "../core/model/time.model";

@Component({
	selector: 'app-convites',
	templateUrl: './convites.component.html',
	styleUrls: ['./convites.component.css']
})
export class ConvitesComponent implements OnInit {

	convites: Partida[];
	time: Time = JSON.parse(localStorage.getItem("time"));
	mostrarLoading: boolean = true;

	constructor(private partidaService: PartidaService) { }


	ngOnInit() {
		this.partidaService.getConvitesPartidas(this.time.Id)
			.subscribe((resposta: Partida[]) => {
				this.convites = resposta;
				console.log(resposta);
			})
	}

	alterarConvite(idPartida, idSituacao) {
		this.partidaService.alterarSituacao(idPartida, idSituacao)
			.subscribe((resposta: boolean) => {
				if (resposta)
					this.convites.filter(obj => obj.Id == idPartida);
			});
	}
}
