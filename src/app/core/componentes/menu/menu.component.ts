import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AutenticacaoService } from "../../servicos/autenticacao.service";
import { NotificacaoService } from "../../servicos/notificacao.service";
import { Time } from "../../model/time.model";
import { Router } from "@angular/router";
import { PartidaService } from '../../servicos/partida.service';
import { Partida } from '../../model/partida.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    iconNotificacao: string;
    partidasAgenda: Partida[];
    @Output() ocultarMenu = new EventEmitter();
    time: Time = JSON.parse(localStorage.getItem("time"));
    public nome: string = "";
    mostrarAgenda: boolean = false;

    constructor(
        private autenticacaoService: AutenticacaoService,
        private partidaService: PartidaService,
        private notificacaoService: NotificacaoService,
        private router: Router) { }

    ngOnInit() {
        this.notificacaoService.jogoPendente(this.time.Id)
            .subscribe((resposta: boolean) => {

                if (resposta)
                    this.iconNotificacao = "notifications_active";
                else
                    this.iconNotificacao = "notifications";

            });

        this.partidaService.getProximas(this.time.Id)
            .subscribe((resposta: Partida[]) => {
                this.partidasAgenda = resposta;
            })

    }

    agenda() {
        this.mostrarAgenda = !this.mostrarAgenda;
    }

    onSubmit() {

        this.router.navigate(["/partidas/inicio", { nome: this.nome }]);
    }

    sair() {
        this.ocultarMenu.emit(true);
        this.autenticacaoService.sair();
    }
}
