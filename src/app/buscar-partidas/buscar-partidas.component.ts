import { Component, OnInit } from '@angular/core';
import { TimeService } from "../core/servicos/time.service";
import { Time } from "../core/model/time.model";

@Component({
	selector: 'app-buscar-partidas',
	templateUrl: './buscar-partidas.component.html',
	styleUrls: ['./buscar-partidas.component.css']
})
export class BuscarPartidasComponent implements OnInit {

	time: Time = JSON.parse(localStorage.getItem("time"));
	times: any = [];
	mostrarLoading: boolean = true;

	constructor(private timeService: TimeService) { }

	ngOnInit() {
		this.timeService.idNao = this.time.Id;
		this.timeService.getTimes().subscribe((resposta) => {
			this.times = resposta;
			this.mostrarLoading = false;
			console.log(resposta);
		})
	}

}
