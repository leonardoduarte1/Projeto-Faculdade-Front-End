import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './componentes/loading/loading.component';
import { IteratorPipe } from './pipes/iterator.pipe';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [LoadingComponent, IteratorPipe],
	exports: [LoadingComponent, IteratorPipe]
})
export class SharedModule { }
