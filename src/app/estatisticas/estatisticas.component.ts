import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { EstatisticasService } from "../core/servicos/estatisticas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-estatisticas',
	templateUrl: './estatisticas.component.html',
	styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

	chartPartidas: any;
	chartGols: any;
	dadosPartidas: string;
	dadosGols: string;

	constructor(private estatisticasService: EstatisticasService,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.estatisticasService.gols(this.route.snapshot.params["id"])
			.subscribe((resposta: any) => {
				this.dadosGols = resposta;
				this.chartGols = new Chart("canvasGols", {
					type: 'pie',
					data: {
						datasets: [{
							data: this.dadosGols.split(","),
							backgroundColor: [
								'#00796B',
								'#574841'
							]
						}],

						// These labels appear in the legend and in the tooltips when hovering different arcs
						labels: [
							'Feitos',
							'Sofridos'
						]
					}
					//options: options
				});

			});
		this.estatisticasService.partidas(this.route.snapshot.params["id"])
			.subscribe((resposta: any) => {
				this.dadosGols = resposta;
				this.chartPartidas = new Chart("canvasPartidas", {
					type: 'pie',
					data: {
						datasets: [{
							data: this.dadosGols.split(","),
							backgroundColor: [
								'#00796B',
								'#574841'
							]
						}],

						// These labels appear in the legend and in the tooltips when hovering different arcs
						labels: [
							'Vitórias',
							'Derrotas'
						]
					}
					//options: options
				});

			})




	}

}
