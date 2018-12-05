import { Component, OnInit } from '@angular/core';
import { Partida } from "../core/model/partida.model";
import { PartidaService } from "../core/servicos/partida.service";
import { Time } from "../core/model/time.model";
import * as jQuery from 'jquery';
import { Router } from '@angular/router';

declare var bootbox: any;

@Component({
    selector: 'app-convites',
    templateUrl: './convites.component.html',
    styleUrls: ['./convites.component.css']
})
export class ConvitesComponent implements OnInit {

    convites: Partida[];
    convitesEnviados: Partida[];
    time: Time = JSON.parse(localStorage.getItem("time"));
    mostrarLoading: boolean = true;

    constructor(private partidaService: PartidaService, private router: Router) { }


    ngOnInit() {
        this.partidaService.getConvitesPartidas(this.time.Id)
            .subscribe((resposta: Partida[]) => {
                this.convites = resposta;
                this.mostrarLoading = false;
            })

        this.partidaService.getConvitesEnviados(this.time.Id)
            .subscribe((resposta: Partida[]) => {
                this.convitesEnviados = resposta;
                this.mostrarLoading = false;
            })

    }

    alterarConvite(idPartida, idSituacao) {
        this.partidaService.alterarSituacao(idPartida, idSituacao)
            .subscribe((resposta: boolean) => {
                if (resposta)
                    this.convites.filter(obj => obj.Id == idPartida);

                if (resposta) {
                    bootbox.alert("Partida aceita com sucesso.");
                }
                this.router.navigate(["/"]);
                console.log(resposta);
            });
    }
}
