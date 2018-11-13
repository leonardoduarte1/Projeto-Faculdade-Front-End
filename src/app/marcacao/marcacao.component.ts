import { Component, OnInit } from '@angular/core';
import { ParametrosService } from "../core/servicos/parametros.service";
import { LocalPartida } from "../core/model/localPartida.model";
import { Partida } from "../core/model/partida.model";
import { Time } from "../core/model/time.model";
import { TimeService } from "../core/servicos/time.service";
import { ActivatedRoute } from "@angular/router";
import { PartidaService } from "../core/servicos/partida.service";
import { Router } from "@angular/router";

declare var bootbox: any;

@Component({
	selector: 'app-marcacao',
	templateUrl: './marcacao.component.html',
	styleUrls: ['./marcacao.component.css']
})
export class MarcacaoComponent implements OnInit {

	locais: LocalPartida[];
	partida: Partida = new Partida();
	time: Time = JSON.parse(localStorage.getItem("time"));
	timeAdversario: Time = new Time();

	constructor(private parametrosService: ParametrosService,
		private timeService: TimeService,
		private partidaService: PartidaService,
		private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.parametrosService.getLocaisPartida()
			.subscribe((resposta: any) => {
				this.locais = resposta;
				console.log(this.locais);
			});

		this.timeService.buscarTimePeloId(this.route.snapshot.params["id"])
			.subscribe((resposta: any) => {
				this.timeAdversario = resposta;
				console.log(this.timeAdversario);
			});
	}



	localSelecionado(local: LocalPartida) {
		this.partida.IdLocalPartida = local.Id;
		local.Ativo = !local.Ativo;
	}

	onSubmit() {
		this.partida.IdTimeA = this.time.Id;
		this.partida.IdTimeB = this.timeAdversario.Id;
		this.partida.IdSituacao = 2;
		this.partida.PlacarTimeA = 0;
		this.partida.PlacarTimeB = 0;

		this.partidaService.inserirPartida(this.partida)
			.subscribe((resposta: any) => {

				if (resposta) {
					bootbox.alert("Partida marcada com sucesso.");
				}
				this.router.navigate(["/"]);
				console.log(resposta);
			})

	}

}
