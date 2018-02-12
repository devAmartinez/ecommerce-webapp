import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: '../../views/general/header.html'
})

export class HeaderComponent {
	public tituloEncabezado: string;

	constructor() {
		this.tituloEncabezado = 'Ecommerce webApp en Angular 5 (MEAN)';
	}
}