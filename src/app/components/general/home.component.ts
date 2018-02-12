import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: '../../views/general/home.html'
})

export class HomeComponent {
	public titulo: string;

	constructor() {
		this.titulo = 'MEAN WebApp de productos';
	}

	OnInit(){
		console.log('Se ha cargado el componente home.component.ts');
	}
}