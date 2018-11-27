import { Component, OnInit } from '@angular/core';
import { Time } from "../core/model/time.model";
import { Jogador } from "../core/model/jogador.model";
import { JogadorService } from "../core/servicos/jogador.service";

@Component({
	selector: 'app-meu-time',
	templateUrl: './meu-time.component.html',
	styleUrls: ['./meu-time.component.css']
})
export class MeuTimeComponent implements OnInit {

	time: Time = JSON.parse(localStorage.getItem("time"));
	jogadores: Jogador[];

	constructor(private jogadorService: JogadorService) { }

	ngOnInit() {
		this.jogadorService.getJogadores(this.time.Id)
			.subscribe((resposta: Jogador[]) => {
				this.jogadores = resposta;
				console.log(resposta);
			})



	}

}
