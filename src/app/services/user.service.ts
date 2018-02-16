import { Injectable, Inject } from '@angular/core';
import {	Http,
					Response,
					Headers,
					RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';
import { GLOBAL } from './global';

@Injectable()

export class UserService {
	public url: string;
	private _logged = new BehaviorSubject<boolean>(this.getToken() !== null ? true : false);

	constructor(
		private _http: Http,
		@Inject('AUTH_TOKEN') private _authTokenName: string
	) {
		this.url = GLOBAL.url;
		this._logged = new BehaviorSubject<boolean>(false);
	}

	signUp(user: User): void {
		let body = {
			'email': user.email,
			'displayName': user.displayName,
			'password': user.password
		};

		let header = new Headers ({
			'Content-type': 'application/json'
		});

		this._http
			.post(this.url + 'signup', body, { headers: header })
			.subscribe(
				(res: any) => {
					localStorage.setItem(this._authTokenName,res.token);
					this._logged.next(true);
				},
				(err: any) => {
					this._logged.next(false);
				}
			);
	}

	getToken(): string {
		return localStorage.getItem(this._authTokenName);
	}

	isLogged(): BehaviorSubject<boolean> {
		return this._logged;
	}

	logout(): void {
    localStorage.removeItem(this._authTokenName);
    //localStorage.removeItem(this.authUser);
    this._logged.next(false);
  }
}