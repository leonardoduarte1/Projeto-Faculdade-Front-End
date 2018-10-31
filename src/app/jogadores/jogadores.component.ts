import { Component, OnInit } from '@angular/core';
import { JogadorService } from "src/app/core/servicos/jogador.service";
import { Jogador } from "src/app/core/model/jogador.model";
import { Time } from "src/app/core/model/time.model";

@Component({
	selector: 'app-jogadores',
	templateUrl: './jogadores.component.html',
	styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent implements OnInit {

	public jogador: Jogador = {
		'Id': 0,
		'Nome': '',
		'Email': '',
		'Telefone': '',
		'IdPosicao': 0,
		'IdTime': 0
	};

	time: Time = JSON.parse(localStorage.getItem("time"));
	jogadores: Jogador[];

	constructor(private jogadorService: JogadorService) { }

	ngOnInit() {
	}

	inserir() {
		this.jogador.IdTime = this.time.Id;
		this.jogadorService.inserirJogador(this.jogador)
			.subscribe((resposta) => {
				this.jogador.Nome = "";
				this.jogador.Email = "";
				this.jogador.Telefone = "";
				this.jogador.IdPosicao = 0;

				console.log(resposta);
			});
	}

}
