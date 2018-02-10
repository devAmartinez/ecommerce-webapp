import { Component } from '@angular/core';
import {  Router,
					ActivatedRoute,
					Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
	selector: 'app-sign-in',
	templateUrl: '../views/sign-in.html',
	providers: [UserService]
})

export class SignInComponent {
	public titulo: string;

	constructor() {
		this.titulo = 'Iniciar sesión';
	}

	signIn() {

	}
}