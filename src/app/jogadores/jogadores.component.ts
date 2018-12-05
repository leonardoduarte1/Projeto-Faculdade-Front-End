import { Component, OnInit } from '@angular/core';
import { JogadorService } from "../core/servicos/jogador.service";
import { Jogador } from "../core/model/jogador.model";
import { Time } from "../core/model/time.model";
import { ParametrosService } from "../core/servicos/parametros.service";

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
    posicoes: any;

    constructor(private jogadorService: JogadorService,
        private parametrosService: ParametrosService) { }

    ngOnInit() {
        this.jogadorService.getJogadores(this.time.Id)
            .subscribe((resposta: Jogador[]) => {
                this.jogadores = resposta;
                console.log(resposta);
            });

        this.parametrosService.getPosicoes()
            .subscribe((resposta: any) => {
                this.posicoes = resposta;
                console.log(resposta);
            })
    }

    inserir() {
        this.jogador.IdTime = this.time.Id;

        this.jogadorService.inserirJogador(this.jogador)
            .subscribe((resposta) => {
                this.jogador.Nome = "";
                this.jogador.Email = "";
                this.jogador.Telefone = "";
                this.jogador.IdPosicao = 0;

                this.jogadorService.getJogadores(this.time.Id)
                    .subscribe((resposta: Jogador[]) => {
                        this.jogadores = resposta;
                        console.log(resposta);
                    });

                console.log(resposta);
            });
    }

}
