import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { GLOBAL } from '../services/global';
import { User } from '../models/user';

@Component({
	selector: 'app-sign-up',
	templateUrl: '../views/sign-up.html',
	providers: [UserService]
})

export class SignUpComponent {
	public titulo: string;
	public user: User;

	constructor() {
		this.titulo = 'Registrarse como nuevo usuario';
		this.user = new User('','','','');
	}

	signUp() {
		
	}
}