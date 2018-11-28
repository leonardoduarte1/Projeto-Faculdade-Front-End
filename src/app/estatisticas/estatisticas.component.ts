import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
	selector: 'app-estatisticas',
	templateUrl: './estatisticas.component.html',
	styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

	chartPartidas: any;
	chartGols: any;

	constructor() { }

	ngOnInit() {
		this.chartPartidas = new Chart("canvasPartidas", {
			type: 'pie',
			data: {
				datasets: [{
					data: [10, 20, 30]
				}],

				// These labels appear in the legend and in the tooltips when hovering different arcs
				labels: [
					'Red',
					'Yellow',
					'Blue'
				]
			}
			//options: options
		});

		this.chartGols = new Chart("canvasGols", {
			type: 'pie',
			data: {
				datasets: [{
					data: [10, 20, 30]
				}],

				// These labels appear in the legend and in the tooltips when hovering different arcs
				labels: [
					'Red',
					'Yellow',
					'Blue'
				]
			}
			//options: options
		});
	}

}
