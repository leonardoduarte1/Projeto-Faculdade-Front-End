import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

@Component({
	selector: 'app-menu-time',
	templateUrl: './menu-time.component.html',
	styleUrls: ['./menu-time.component.css']
})
export class MenuTimeComponent implements OnInit {

	@Input() id: string;
	constructor() { }

	ngOnInit() {
	}

}
