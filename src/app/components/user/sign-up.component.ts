import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';
import { User } from '../../models/user';

@Component({
	selector: 'app-sign-up',
	templateUrl: '../../views/user/sign-up.html',
	providers: [UserService]
})

export class SignUpComponent {
	public titulo: string;
	public user: User;
	public changeType: boolean;
	public showErrorMessage: boolean;


	constructor(
		private _userService: UserService,
		private _router: Router
	) {
		this.titulo = 'Registrarse como nuevo usuario';
		this.user = new User('','','','');
		this.changeType = false;
		this.showErrorMessage = false;

		this._userService.isLogged()
			.subscribe((logged: boolean) => {
				this.showErrorMessage = !logged;
				if (logged) {
					console.log('fuck!!');
					window.location.reload();
				}
			});
	}

	changeTypeObject(changeType: boolean) {
		this.changeType = changeType;
	}

	onSubmit() {
		this.signUp();
	}

	signUp() {
		if (!!this.user.displayName &&
				!!this.user.email &&
				!!this.user.password) {
			this._userService.signUp(this.user);
		}
	}

}