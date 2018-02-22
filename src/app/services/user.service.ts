import { Injectable } from '@angular/core';
import {	
	Http,
	Response,
	Headers,
	RequestOptions 
} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';
import { GLOBAL } from './global';

@Injectable()

export class UserService {
	public url: string;
	//private _logged = new BehaviorSubject<boolean>(this.getToken() !== null ? true : false);

	constructor(
		private _http: Http
	) {
		this.url = GLOBAL.url;
		//this._logged = new BehaviorSubject<boolean>(false);
	}

	signUp(user: any){
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

	signIn(user: any){
		let body = {
			'email': user.email,
			'password': user.password
		};

		let header = new Headers ({
			'Content-type': 'application/json'
		});

		return this._http
			.post(this.url + 'signin', body, { headers: header })
			.map(res => res.json());
	}

	storeToken(token: string): Promise < boolean > {
    localStorage.setItem('AUTH_TOKEN', token);
    return Promise.resolve(true);
  }

  removeToken(): Promise < boolean > {
    localStorage.removeItem('AUTH_TOKEN');
    return Promise.resolve(true);
  }


/*
	getToken() {
		return localStorage.getItem(this._authTokenName);
	}

	storeToken(tokenName:string, token: string): Promise < boolean > {
    localStorage.setItem(tokenName, token);
    return Promise.resolve(true);
  }*/
/*
	isLogged(): BehaviorSubject<boolean> {
		return this._logged;
	}

	logout() {
    localStorage.removeItem(this._authTokenName);
    //localStorage.removeItem(this.authUser);
    //this._logged.next(false);
  }*/
}