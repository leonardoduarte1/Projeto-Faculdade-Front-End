import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './componentes/menu/menu.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [
		RouterModule,
		CommonModule
	],
	declarations: [MenuComponent, RodapeComponent],
	exports: [MenuComponent, RodapeComponent]
})
export class CoreModule { }
