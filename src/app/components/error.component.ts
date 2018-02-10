import { Component } from '@angular/core';

@Component({
	selector: 'app-error',
	templateUrl: '../views/error.html'
})

export class ErrorComponent {
	public titulo: string;
	public detalle: string;

	constructor() {
		this.titulo = 'Error 404 página no encontrada';
		this.detalle = 'Por alguna razón la página solicitada no se ha encontrado.';
	}
}
