import { Component } from '@angular/core';
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

	constructor() {
		this.titulo = 'Registrarse como nuevo usuario';
		this.user = new User('','','','');
		this.changeType = false;
	}

	
	ngOnInit() {

	}

	changeTypeObject(changeType: boolean) {
		this.changeType = changeType;
	}

	signUp() {
		
	}
}