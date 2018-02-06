import { Injectable } from '@angular/core';
import { 	Http,
					Response,
					Headers,
					RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { GLOBAL } from './global';

@Injectable()

export class ProductService {
	public url: string;

	constructor(
		private _http: Http
	){
		this.url = GLOBAL.url;
	}

	getProducts() {
		return this._http.get(this.url + 'product')
			.map(res => res.json());
	}

	getProduct(productId) {
		return this._http.get(this.url + 'product/' + productId)
			.map(res => res.json());
	}

	addProduct(product: Product) {
  	let body = {
  		'name': product.name,
  		'description': product.description,
  		'price': product.price,
  		'image': product.image
  	};

	  let headers = new Headers({
	  	'Content-type': 'application/json',
	  	'Authorization': GLOBAL.token
	  })
  	console.log(body);
  	return this._http
  		.post(this.url + 'product', body, { headers: headers })
	    .map(res => res.json());
	}

	editProduct(productId, product: Product) {
		let body = {
  		'name': product.name,
  		'description': product.description,
  		'price': product.price,
  		'image': product.image
  	};

	  let headers = new Headers({
	  	'Content-type': 'application/json',
	  	'Authorization': GLOBAL.token
	  })

	  console.log(body);
  	return this._http
  		.put(this.url + 'product/' + productId, body, { headers: headers })
	    .map(res => res.json());
	}

	deleteProdut(productId) {
		return this._http
			.delete(this.url + 'product/' + productId)
			.map(res => res.json());
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>){
		return new Promise((resolve, reject) => {
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();

			for(var i = 0; i < files.length; i++) {
				formData.append('file', files[i], files[i].name);

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {
						if (xhr.status == 200) {
							resolve(JSON.parse(xhr.response));
						} else {
							try {
					      reject(JSON.parse(xhr.response));
					    } catch (e) {
					      reject(xhr.response);
					    }							
						}
					}
				}
			}

			xhr.open("POST", url, true);
			xhr.send(formData);

		});
	}
}