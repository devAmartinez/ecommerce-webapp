import { Injectable } from '@angular/core';
import {	Http,
					Response,
					Headers,
					RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { GLOBAL } from './global';

@Injectable()

export class UserService {
	public url: string;

	constructor(
		private _http: Http
	) {
		this.url = GLOBAL.url;
	}

	signUp(user: User) {
		let body = {
			'email': user.email,
			'displayName': user.displayName,
			'password': user.password
		};

		let header = new Headers ({
			'Content-type': 'application/json'
		});

		return this._http
			.post(this.url + 'signup', body, { headers: header })
			.map(res => res.json());
	}


}