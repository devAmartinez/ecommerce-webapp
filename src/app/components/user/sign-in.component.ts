import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
	selector: 'app-sign-in',
	templateUrl: '../../views/user/sign-in.html',
	providers: [UserService]
})

export class SignInComponent {
	public titulo: string;
	public user: User;

	constructor() {
		this.titulo = 'Iniciar sesión';
		this.user = new User('', '', '', '');
	}

	signIn() {

	}

	onSubmit() {

	}

	clearForm() {
		this.user.email = null;
	}
}